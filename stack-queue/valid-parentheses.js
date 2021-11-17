/**
 * Given a string containing only parentheses, determine if it is valid.
 * The string is valid if all parentheses close.
 */

// An empty string counts as valid, so return true.

const map = {
  "{": "}",
  "[": "]",
  "(": ")",
};

function validateParentheses(input) {
  if (input.length === 0) {
    return true;
  }

  const stack = [];
  for (let i = 0; i < input.length; i++) {
    const currentParentheses = input[i];
    // push to the stack if it is an opening parentheses
    if (map[currentParentheses]) {
      stack.push(currentParentheses);
    } else {
      // compare the last parenthese in the stack with current closing parentheses
      const leftParentheses = stack.pop();
      const correctRightParentheses = map[leftParentheses];
      if (correctRightParentheses !== currentParentheses) {
        return false;
      }
    }
  }

  return stack.length === 0; // true if nothing is left in the stack.
}

// Analysis
// In worst case whole input data can be store in the stack in case ther is no closing parentheses.
// Thas is stack is scaling according th the size of input data.
// Space complexity: O(n)
// Time complexity: O(n)
