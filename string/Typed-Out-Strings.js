/**
 * Given two strings S and T, return if they equal when both are typed out.
 * Any '#' that appears in the string counts as a backspace.
 */

// Constraints
// Delete the two values before the first # if two #'s appear beside each other.
// # deletes nothing if there is no character to remove.
// Two empty strings equal to each other.
// It is case sensitive.

const S = "ab#e";
const T = "ak#t#e";

// time & space complexity: O(n)
function buildArray(string) {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "#") {
      array.pop();
    } else {
      array.push(string[i]);
    }
  }
  return array;
}

// time & space complexity: O(2a + b) or O(a + 2b) => O(a + b)
function backSpaceCompare(S, T) {
  const finalS = buildArray(S); // time & space complexity: O(a)
  const finalT = buildArray(T); // time & space complexity: O(b)
  if (finalS.length !== finalT.length) {
    return false;
  }
  for (let p = 0; p < finalS.length; p++) {
    // time & space complexity: O(a) or O(b)
    if (finalS[p] !== finalT[p]) {
      return false;
    }
  }
  return true;
}

console.log(backSpaceCompare(S, T));
