// // Ensure pincodeData is loaded from the separate file.
// document.addEventListener('DOMContentLoaded', () => {
//     const stateSelect = document.getElementById('state');
//     const districtSelect = document.getElementById('district');
//     const citySelect = document.getElementById('city');
//     const pincodeInput = document.getElementById('pincode');

//     // Function to populate states
//     function populateStates() {
//         // Clear previous options
//         stateSelect.innerHTML = '<option value="">--Select State--</option>';
//         const states = Object.keys(pincodeData);
//         states.forEach(state => {
//             const option = document.createElement('option');
//             option.value = state;
//             option.textContent = state;
//             stateSelect.appendChild(option);
//         });
//     }

//     // Function to populate districts
//     function populateDistricts(selectedState) {
//         districtSelect.innerHTML = '<option value="">--Select District--</option>';
//         citySelect.innerHTML = '<option value="">--Select City--</option>';
//         pincodeInput.value = '';
//         districtSelect.disabled = true;
//         citySelect.disabled = true;

//         if (selectedState) {
//             const districts = Object.keys(pincodeData[selectedState]);
//             districts.forEach(district => {
//                 const option = document.createElement('option');
//                 option.value = district;
//                 option.textContent = district;
//                 districtSelect.appendChild(option);
//             });
//             districtSelect.disabled = false;
//         }
//     }

//     // Function to populate cities
//     function populateCities(selectedState, selectedDistrict) {
//         citySelect.innerHTML = '<option value="">--Select City--</option>';
//         pincodeInput.value = '';
//         citySelect.disabled = true;

//         if (selectedState && selectedDistrict) {
//             const cities = Object.keys(pincodeData[selectedState][selectedDistrict]);
//             cities.forEach(city => {
//                 const option = document.createElement('option');
//                 option.value = city;
//                 option.textContent = city;
//                 citySelect.appendChild(option);
//             });
//             citySelect.disabled = false;
//         }
//     }

//     // Function to auto-fill pincode from city
//     function fillPincodeFromCity(selectedState, selectedDistrict, selectedCity) {
//         if (selectedState && selectedDistrict && selectedCity) {
//             const pincode = pincodeData[selectedState][selectedDistrict][selectedCity];
//             pincodeInput.value = pincode;
//         }
//     }

//     // Function to auto-fill state, district, and city from pincode
//     function fillLocationFromPincode(pincode) {
//         stateSelect.value = '';
//         districtSelect.innerHTML = '<option value="">--Select District--</option>';
//         citySelect.innerHTML = '<option value="">--Select City--</option>';
//         districtSelect.disabled = true;
//         citySelect.disabled = true;

//         if (pincode.length === 6) {
//             for (const state in pincodeData) {
//                 for (const district in pincodeData[state]) {
//                     for (const city in pincodeData[state][district]) {
//                         if (pincodeData[state][district][city] === pincode) {
//                             stateSelect.value = state;
//                             populateDistricts(state);
//                             districtSelect.value = district;
//                             populateCities(state, district);
//                             citySelect.value = city;
//                             return;
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     // Event Listeners
//     stateSelect.addEventListener('change', (e) => {
//         populateDistricts(e.target.value);
//     });

//     districtSelect.addEventListener('change', (e) => {
//         populateCities(stateSelect.value, e.target.value);
//     });

//     citySelect.addEventListener('change', (e) => {
//         fillPincodeFromCity(stateSelect.value, districtSelect.value, e.target.value);
//     });

//     pincodeInput.addEventListener('input', (e) => {
//         fillLocationFromPincode(e.target.value);
//     });

//     // Initial population
//     populateStates();
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const stateSelect = document.getElementById('state');
//     const districtSelect = document.getElementById('district');
//     const citySelect = document.getElementById('city');
//     const pincodeInput = document.getElementById('pincode');

//     // Function to populate states
//     function populateStates() {
//         // Clear previous options
//         stateSelect.innerHTML = '<option value="">--Select State--</option>';
//         const states = Object.keys(pincodeData);
//         states.forEach(state => {
//             const option = document.createElement('option');
//             option.value = state;
//             option.textContent = state;
//             stateSelect.appendChild(option);
//         });
//     }

//     // Function to populate districts
//     function populateDistricts(selectedState) {
//         districtSelect.innerHTML = '<option value="">--Select District--</option>';
//         citySelect.innerHTML = '<option value="">--Select City--</option>';
//         pincodeInput.value = '';
//         districtSelect.disabled = true;
//         citySelect.disabled = true;

//         if (selectedState && pincodeData[selectedState]) {
//             const districts = Object.keys(pincodeData[selectedState]);
//             districts.forEach(district => {
//                 const option = document.createElement('option');
//                 option.value = district;
//                 option.textContent = district;
//                 districtSelect.appendChild(option);
//             });
//             districtSelect.disabled = false;
//         }
//     }

//     // Function to populate cities
//     function populateCities(selectedState, selectedDistrict) {
//         citySelect.innerHTML = '<option value="">--Select City--</option>';
//         pincodeInput.value = '';
//         citySelect.disabled = true;

//         if (selectedState && selectedDistrict && pincodeData[selectedState][selectedDistrict]) {
//             const cities = Object.keys(pincodeData[selectedState][selectedDistrict]);
//             cities.forEach(city => {
//                 const option = document.createElement('option');
//                 option.value = city;
//                 option.textContent = city;
//                 citySelect.appendChild(option);
//             });
//             citySelect.disabled = false;
//         }
//     }

//     // Function to auto-fill pincode from city
//     function fillPincodeFromCity(selectedState, selectedDistrict, selectedCity) {
//         if (selectedState && selectedDistrict && selectedCity) {
//             const pincode = pincodeData[selectedState][selectedDistrict][selectedCity];
//             pincodeInput.value = pincode;
//         }
//     }

//     // Function to auto-fill state, district, and city from pincode
//     function fillLocationFromPincode(pincode) {
//         stateSelect.value = '';
//         districtSelect.innerHTML = '<option value="">--Select District--</option>';
//         citySelect.innerHTML = '<option value="">--Select City--</option>';
//         districtSelect.disabled = true;
//         citySelect.disabled = true;

//         if (pincode.length === 6) {
//             for (const state in pincodeData) {
//                 for (const district in pincodeData[state]) {
//                     for (const city in pincodeData[state][district]) {
//                         if (pincodeData[state][district][city] === pincode) {
//                             stateSelect.value = state;
//                             populateDistricts(state);
//                             districtSelect.value = district;
//                             populateCities(state, district);
//                             citySelect.value = city;
//                             return;
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     // Event Listeners
//     stateSelect.addEventListener('change', (e) => {
//         populateDistricts(e.target.value);
//     });

//     districtSelect.addEventListener('change', (e) => {
//         populateCities(stateSelect.value, e.target.value);
//     });

//     citySelect.addEventListener('change', (e) => {
//         fillPincodeFromCity(stateSelect.value, districtSelect.value, e.target.value);
//     });

//     pincodeInput.addEventListener('input', (e) => {
//         fillLocationFromPincode(e.target.value);
//     });

//     // Initial population
//     populateStates();
// });

document.addEventListener('DOMContentLoaded', () => {
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const citySelect = document.getElementById('city');
    const pincodeInput = document.getElementById('pincode');

    // Function to populate states
    function populateStates() {
        // Clear previous options
        stateSelect.innerHTML = '<option value="">--Select State--</option>';
        const states = Object.keys(pincodeData);
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }

    // Function to populate districts
    function populateDistricts(selectedState) {
        districtSelect.innerHTML = '<option value="">--Select District--</option>';
        citySelect.innerHTML = '<option value="">--Select City--</option>';
        pincodeInput.value = '';
        districtSelect.disabled = true;
        citySelect.disabled = true;

        if (selectedState && pincodeData[selectedState]) {
            const districts = Object.keys(pincodeData[selectedState]);
            districts.forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
            districtSelect.disabled = false;
        }
    }

    // Function to populate cities
    function populateCities(selectedState, selectedDistrict) {
        citySelect.innerHTML = '<option value="">--Select City--</option>';
        pincodeInput.value = '';
        citySelect.disabled = true;

        if (selectedState && selectedDistrict && pincodeData[selectedState][selectedDistrict]) {
            const cities = Object.keys(pincodeData[selectedState][selectedDistrict]);
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
            citySelect.disabled = false;
        }
    }

    // Function to auto-fill pincode from city
    function fillPincodeFromCity(selectedState, selectedDistrict, selectedCity) {
        if (selectedState && selectedDistrict && selectedCity) {
            const pincode = pincodeData[selectedState][selectedDistrict][selectedCity];
            pincodeInput.value = pincode;
        }
    }

    // Function to auto-fill state, district, and city from pincode
    function fillLocationFromPincode(pincode) {
        stateSelect.value = '';
        districtSelect.innerHTML = '<option value="">--Select District--</option>';
        citySelect.innerHTML = '<option value="">--Select City--</option>';
        districtSelect.disabled = true;
        citySelect.disabled = true;

        if (pincode.length === 6) {
            for (const state in pincodeData) {
                for (const district in pincodeData[state]) {
                    for (const city in pincodeData[state][district]) {
                        if (pincodeData[state][district][city] === pincode) {
                            stateSelect.value = state;
                            populateDistricts(state);
                            districtSelect.value = district;
                            populateCities(state, district);
                            citySelect.value = city;
                            pincodeInput.value = pincode;
                            return;
                        }
                    }
                }
            }
        }
    }

    // Event Listeners
    stateSelect.addEventListener('change', (e) => {
        populateDistricts(e.target.value);
    });

    districtSelect.addEventListener('change', (e) => {
        populateCities(stateSelect.value, e.target.value);
    });

    citySelect.addEventListener('change', (e) => {
        fillPincodeFromCity(stateSelect.value, districtSelect.value, e.target.value);
    });

    pincodeInput.addEventListener('input', (e) => {
        fillLocationFromPincode(e.target.value);
    });

    // Initial population
    populateStates();
});