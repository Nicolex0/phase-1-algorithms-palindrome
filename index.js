function isPalindrome(word) {
  // Initialize two pointers, one at the beginning of the word (start) and one at the end of the word (end).
  let start = 0;
  let end = word.length - 1;

  // Loop while start pointer is less than or equal to end pointer:
  while (start <= end) {
    // If the character at start pointer is not equal to the character at end pointer, return false.
    if (word[start] !== word[end]) {
      return false;
    }
    // Increment start pointer and decrement end pointer.
    start++;
    end--;
  }

  // If the loop completes without returning false, return true.
  return true;
}

/* 
  1. Initialize two pointers, one at the beginning of the word (start) and one at the end of the word (end).
  2. Loop while start pointer is less than or equal to end pointer:
      a. If the character at start pointer is not equal to the character at end pointer, return false.
      b. Increment start pointer and decrement end pointer.
  3. If the loop completes without returning false, return true.
*/

/*
  The function iterates through the word using two pointers, one starting from the beginning of the word and the other starting from the end. It compares the characters at these positions. If any pair of characters does not match, the function returns false, indicating that the word is not a palindrome. If all pairs of characters match, the function returns true, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
