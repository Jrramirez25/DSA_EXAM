// A function to sort an array of numbers in reverse order
function sortNumbersReverse(arr) {
    return arr.sort((a, b) => b - a);
}

// A function to sort an array of strings alphabetically
function sortNamesAlphabetically(arr) {
    return arr.sort();
}

// Get the user input for numbers and the names
const numbersInput = prompt("Please enter numbers separated by commas:", "24, 65, 21, 5, 9, 32, 42, 80, 57");
const namesInput = prompt("Please enter names separated by commas:", "Zenvo, Erica, Jordie, Alicia, Redon");

// Validate input
if (!numbersInput || !namesInput) {
    console.log("Please enter both numbers and names to proceed");
} else {
    // It convert the input strings into an arrays
    const numbers = numbersInput.split(',').map(Number);
    const names = namesInput.split(',').map(name => name.trim());

    // It merge the both arrays
    const mergedArray = numbers.concat(names);
    console.log("Merged Array:", mergedArray);

    // Sort the numbers in reverse order and log
    const sortedNumbers = sortNumbersReverse(numbers);
    console.log("Sorted Numbers (Reverse):", sortedNumbers);

    // Sort the names alphabetically and log
    const sortedNames = sortNamesAlphabetically(names);
    console.log("Sorted Names (Alphabetical):", sortedNames);
}
