// It initialize the empty array to represent the grocery stack
let groceryStack = [];

// Function to check if the stack is empty and return the current size
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        console.log(`Current stack size: ${groceryStack.length}`);
        return groceryStack[groceryStack.length - 1];
    }
}

// Function to add an item to the stack
function push(item) {
    groceryStack.push(item);
    console.log(`Added "${item}" to the stack.`);
    console.log("Current stack:", groceryStack);
    peek(); // Check the stack after pushing
}

// Function to remove the last added item from the stack
function pop() {
    const removedItem = groceryStack.pop();
    if (removedItem) {
        console.log(`Removed "${removedItem}" from the stack.`);
    } else {
        console.log("No items to remove from the stack.");
    }
    console.log("Current stack:", groceryStack);
    peek(); // Check the stack after popping
}

// Get the user input for grocery items
for (let i = 0; i < 5; i++) {
    const item = prompt(`Please enter grocery item ${i + 1}:`);
    if (item) {
        push(item);
    } else {
        console.log("Invalid input. Please enter a valid grocery item.");
        i--; // Decrement i to repeat the input for the same index
    }
}

// Example usage of the pop function
const removeItem = prompt("Do you want to remove the last added item? (yes/no)");
if (removeItem.toLowerCase() === 'yes') {
    pop();
}
