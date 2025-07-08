// A function that restructure the multi-dimensional array
function restructureArray(names, ages) {
    const restructuredArray = [];
    for (let i = 0; i < names.length; i++) {
        restructuredArray.push([names[i], ages[i]]);
    }
    return restructuredArray;
}

// Get the user input for a names and ages
const namesInput = prompt("Please enter names separated by commas:", "Genevieve, Juan, Luna, Gabriel, Elise");
const agesInput = prompt("Please enter ages separated by commas:", "24, 65, 21, 5, 9");

// Validate input
if (!namesInput || !agesInput) {
    console.log("Please enter both names and ages to proceed");
} else {
    // Convert the input strings into an arrays
    const names = namesInput.split(',').map(name => name.trim());
    const ages = agesInput.split(',').map(Number);

    // It check if the both arrays are have the same length
    if (names.length !== ages.length) {
        console.log("The number of names and ages must be the same.");
    } else {
        // It restructure the arrays
        const restructuredArray = restructureArray(names, ages);

        // Log the restructured multidimensional array
        restructuredArray.forEach(item => {
            console.log(item);
        });
    }
}
