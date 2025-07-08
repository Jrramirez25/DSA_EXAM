// A function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// A function to check if a string is a palindrome
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

// Get the user input for two words
const word1 = prompt("Please enter the first word:", "RACECAR");
const word2 = prompt("Please enter the second word:", "RECORDER");

// Validate input
if (!word1 || !word2) {
    console.log("Please enter both words to proceed");
} else {
    // Process and display results for first word
    console.log(`Original word 1: ${word1}`);
    const reversedWord1 = reverseString(word1);
    console.log(`Reversed word 1: ${reversedWord1}`);
    console.log(`Is "${word1}" a palindrome? ${isPalindrome(word1)}`);
    
    // Process and display the results for second word
    console.log(`Original word 2: ${word2}`);
    const reversedWord2 = reverseString(word2);
    console.log(`Reversed word 2: ${reversedWord2}`);
    console.log(`Is "${word2}" a palindrome? ${isPalindrome(word2)}`);
}