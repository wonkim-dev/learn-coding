/**
 * Question
 * You are given an array of positive integers where each integer
 * represents the height of a vertical line (wall) on a chart.
 * Find two lines which together with the x-axis forms a container
 * that would hold the largest amount of water.
 * Return the area of water it would hold.
 */

// Constraints
// The thickness of the lines does not affect the area.
// The both sides of the graph cannot be used to form a container.
// Lines inside a container don't affect the area.

const array = [3, 6, 4, 8, 2, 7];

// Use 2 for loops
// time complexity: O(n^2), space complexity: O(1)
function getMaxWaterTank1(array) {
  let maxVolume = 0;
  for (let p1 = 0; p1 < array.length; p1++) {
    for (let p2 = p1 + 1; p2 < array.length; p2++) {
      const height = Math.min(array[p1], array[p2]);
      const width = p2 - p1;
      const volume = height * width;
      maxVolume = Math.max(maxVolume, volume);
    }
  }
  return maxVolume;
}

console.log(getMaxWaterTank1(array));

//--------------------------------------------------------------------

// Use 2 pointer technique to shrink 2 points starting from both ends
// toward center and use only one for loop.
// time complexity: O(n), space complexity: O(1)
function getMaxWaterTank2(array) {
  let p1 = 0;
  let p2 = array.length - 1;
  let maxVolume = 0;
  while (p1 < p2) {
    const height = Math.min(array[p1], array[p2]);
    const width = p2 - p1;
    const volume = height * width;
    maxVolume = Math.max(maxVolume, volume);
    if (array[p1] < array[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxVolume;
}

console.log(getMaxWaterTank2(array));
