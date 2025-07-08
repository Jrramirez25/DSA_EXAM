// It initialize the empty array to hold the numbers
let numbers = [];

// Function to implement the Bubble Sort Algorithm
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop for the comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                // Swap if the element found is greater
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
                console.log(`Swapped ${arr[j + 1]} and ${arr[j]}`);
            }
        }

        // If no two elements were swapped, the array is sorted
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// Get the user input for numbers
for (let i = 0; i < 10; i++) {
    const input = prompt(`Please enter number ${i + 1}:`);
    const number = parseInt(input, 10);
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        console.log("Invalid input. Please enter a valid number.");
        i--; // Decrement i to repeat the input for the same index
    }
}

// Log the original array
console.log("Original Array:", numbers);

// Sort the array using Bubble Sort
const sortedArray = bubbleSort(numbers);

// Log the sorted array
console.log("Sorted Array:", sortedArray);
