/**
 * Given a string, determine if it is almost a palindrome. A string is almost palindrome
 * if it becomes a palindrome by removing 1 letter. Consider only alphanumeric characters
 * and ignore case sensitivity.
 */

// Return true if the string is already a palindrome.

// "Race a car" => true
// "abccdba" => true
// "abcdefdba" => false
// "ab" => true

function validSubPalindrom(s, leftP, rightP) {
  while (leftP < rightP) {
    if (s[leftP] !== s[rightP]) {
      return false;
    }
    leftP++;
    rightP--;
  }
  return true;
}

// time complexity: O(n)
// space complexity: O(1)
function isAlmostPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let leftP = 0;
  let rightP = s.length - 1;
  while (leftP < rightP) {
    if (s[leftP] != s[rightP]) {
      return (
        validSubPalindrom(s, leftP + 1, rightP) || // skip the left character and fo further check
        validSubPalindrom(s, leftP, rightP - 1) // skip the right character and do further check
      );
    }
    leftP++;
    rightP--;
  }
  return true;
}
