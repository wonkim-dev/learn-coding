/**
 * GIven a string only containing round brackets '(' and ')' and
 * lowercase characters, remove the least amount of brackets
 * so the string is valid. String is considered valid if it is empty or
 * if there are brackets, they all close.
 */

// Return a valid string with the fewest brackets removed.

// "a)bc(d)" => "abc(d)"
// "(ab(c)d" => "ab(c)d" or "(abc)d"
// "))((" => ""

function getValidString(str) {
  const res = str.split(""); // Space & time complexity: O(n)
  const stack = []; // Space complexity: O(n)

  // Time complexity: O(n)
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }

  // Time complexity: O(n)
  while (stack.length) {
    const currentIndex = stack.pop();
    res[currentIndex] = "";
  }

  return res.join(""); // Time complexity: O(n)
}

// Analysis
// Space complexity: O(2n) => O(n)
// Time complexity: O(4n) => O(n)
