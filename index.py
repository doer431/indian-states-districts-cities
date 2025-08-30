import csv
import json
from urllib.request import urlopen
from collections import defaultdict

# Old CSV file name
old_csv = "india_pincode_final.csv"

# New CSV URL
csv_url = "https://data.gov.in/files/ogdpv2dms/s3fs-public/dataurl03122020/pincode.csv"

# Output JS file name
output_js = "pincodeData.js"

# Load old pincode to taluk map
pincode_to_taluk = {}
try:
    with open(old_csv, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            pin = row['pincode'].strip()
            taluk = row['Taluk'].strip()
            if taluk and taluk != 'N/A':
                pincode_to_taluk[pin] = taluk
except FileNotFoundError:
    print(f"Warning: Old CSV file {old_csv} not found. Proceeding without old data.")
except Exception as e:
    print(f"Error reading old CSV: {str(e)}")
    exit(1)

# Download and process new CSV
data = defaultdict(lambda: defaultdict(dict))
try:
    with urlopen(csv_url) as response:
        csv_content = response.read().decode('utf-8')
        reader = csv.DictReader(csv_content.splitlines())
        
        # Group rows by pincode
        groups = defaultdict(list)
        for row in reader:
            pin = row['Pincode'].strip()
            groups[pin].append(row)
        
        # Process each group
        for pin, rows in groups.items():
            if not rows:
                continue
            state = rows[0]['StateName'].upper().strip()
            district = rows[0]['District'].strip()
            if not state or not district:
                continue
            
            offices = [r['OfficeName'].strip() for r in rows]
            office_types = {r['OfficeName'].strip(): r['OfficeType'].strip() for r in rows}
            
            # Find main offices (SO or HO)
            main_offices = [off for off, typ in office_types.items() if typ in ('SO', 'HO')]
            
            city_candidates = main_offices if main_offices else offices
            
            # Function to clean office names
            def clean_name(name):
                for suffix in [' S.O', ' B.O', ' SO', ' BO', ' H.O', ' HO']:
                    if name.endswith(suffix):
                        name = name[:-len(suffix)].strip()
                return name
            
            cleaned_offices = [clean_name(off) for off in offices]
            
            # Prefer old taluk if it matches one of the cleaned offices
            perfect_city = None
            if pin in pincode_to_taluk:
                old_taluk = pincode_to_taluk[pin]
                if old_taluk in cleaned_offices:
                    perfect_city = old_taluk
            
            # If no match, choose the first main office (cleaned)
            if not perfect_city and city_candidates:
                perfect_city = clean_name(city_candidates[0])
            
            # If still none, use the first cleaned office
            if not perfect_city and cleaned_offices:
                perfect_city = cleaned_offices[0]
            
            if perfect_city:
                data[state][district][perfect_city] = pin

except Exception as e:
    print(f"Error processing new CSV: {str(e)}")
    exit(1)

# Write to JS file
try:
    with open(output_js, mode='w', encoding='utf-8') as js_file:
        js_file.write("const pincodeData = ")
        json.dump(data, js_file, indent=4)
        js_file.write(";\n")
        js_file.write("export default pincodeData;\n")
    print(f"Output written to {output_js}")
except Exception as e:
    print(f"Error writing to JS file: {str(e)}")
    exit(1)