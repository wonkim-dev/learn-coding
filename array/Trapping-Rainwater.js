/**
 * Given an array of integers representing an elevation map where the width of each bar is 1,
 * return how much rainwater can be trapped.
 */

// Constraints
// Both sides of the graph are not counted as walls.
// All integers are positive.

const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]; // 8
// const heights = [0, 1, 0, 2, 1];

/**
 * Loop all elements in the array and calculate the water on each element
 * by finding the maximum values in the left and right sides respectively.
 * Then take the lower value from the two maximum values and subtract the
 * height on the current element from it.
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function getTrappedRainwater1(array) {
  let totalWater = 0;
  // A single for loop
  for (let p = 0; p < array.length; p++) {
    let leftP = p;
    let rightP = p;
    let maxLeft = 0;
    let maxRight = 0;
    // Two nested while loops
    while (leftP >= 0) {
      // find the maximum value on left side of the current element
      maxLeft = Math.max(maxLeft, array[leftP]);
      leftP--;
    }
    while (rightP < array.length) {
      // find the maximum value on the right side of the current element
      maxRight = Math.max(maxRight, array[rightP]);
      rightP++;
    }
    // calculate the trapped water on the current element
    const currentWater = Math.min(maxLeft, maxRight) - array[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
}

console.log(getTrappedRainwater1(heights));
