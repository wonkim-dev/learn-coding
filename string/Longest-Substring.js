/**
 * Given a string, find the length of the longest substring without repeating characters.
 */

// Constraints: substring / all characters are lowercase

// "abccabb" => 3
// "ddddd" => 1
// "" => 0
// "abcdbefg" => 6

function getLongestSubstring1(string) {
  let seen = {};
  let maxLength = 0;
  let currentLength = 0;
  let startingIndex = 0;
  for (let i = 0; i < string.length; i++) {
    const currentCharacter = string[i];

    // no matching character
    if (!currentCharacter in seen) {
      seen[currentCharacter] = i;
      currentLength++;

      // character matches
    } else {
      // two sequent characters
      if (seen[currentCharacter] === i - 1) {
        seen[currentCharacter] = i;
        currentLength = 1;
        startingIndex = i;
        // two matching characters are not next to each other
      } else {
        // If the same character occurs after startingIndex,
        if (seen[currentCharacter] >= startingIndex) {
          currentLength = i - seen[currentCharacter];
          startingIndex = seen[currentCharacter] + 1;
        } else {
          seen[currentCharacter] = i;
          currentLength++;
        }
      }
    }
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
}

const str = "abcdbefg";
console.log(getLongestSubstring1(str));
