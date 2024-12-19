// Use the prompt() function to get input from the user (uncomment if running in a browser)
const word1 = prompt("Enter the first word: (e.g., 'RACECAR')") || "RACECAR";
const word2 = prompt("Enter the second word: (e.g., 'RECORDER')") || "RECORDER";

// Function to check if a string is a palindrome
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    console.log(`Original: ${word}, Reversed: ${reversed}`);
    return word === reversed;
}

// Log results for the first word
console.log(`Is "${word1}" a palindrome?`, isPalindrome(word1));

// Log results for the second word
console.log(`Is "${word2}" a palindrome?`, isPalindrome(word2));
