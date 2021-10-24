/**
 * Given two strings S and T, return if they equal when both are typed out.
 * Any '#' that appears in the string counts as a backspace.
 */

// Constraints
// Delete the two values before the first # if two #'s appear beside each other.
// # deletes nothing if there is no character to remove.
// Two empty strings equal to each other.
// It is case sensitive.

const S = "ab#ef#"; // ae
const T = "akf##e"; // ae

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
function backSpaceCompare(string1, string2) {
  const finalS = buildArray(string1); // time & space complexity: O(a)
  const finalT = buildArray(string2); // time & space complexity: O(b)
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

//--------------------------------------------------------------------

/**
 * In the while loop it touches all elements in the arrays only once
 * by moving pointers to the left direction only => time complexity: O(a + b)
 * There is no scaling variable but p1 and p2=> space complexity: O(1)
 */
function backSpaceCompare2(string1, string2) {
  let p1 = string1.length - 1;
  let p2 = string2.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (string1[p1] !== "#" && string2[p2] !== "#") {
      // check if the two values are identical
      if (string1[p1] === string2[p2]) {
        p1--; // moving to the left
        p2--; // moving to the left
      } else {
        return false;
      }
    } else {
      // do not compare the values, but move pointers to the left
      // if one of the pointers has hash tag
      if (string1[p1] === "#") {
        let backwardCount = 2;
        while (backwardCount > 0) {
          p1--; // moving to the left
          backwardCount--;
          if (string1[p1] === "#") {
            backwardCount += 2;
          }
        }
      }

      if (string2[p2] === "#") {
        let backwardCount = 2;
        while (backwardCount > 0) {
          p2--; // moving to the left
          backwardCount--;
          if (string2[p2] === "#") {
            backwardCount += 2;
          }
        }
      }
    }
  }
  return true;
}

console.log(backSpaceCompare2(S, T));
