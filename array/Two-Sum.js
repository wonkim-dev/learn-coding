const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

// Use a for loop and a nested for loop
// time complexity: O(n^2), space complexity: O(1)
const findTwoSum1 = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];

    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }

  return null;
};

findTwoSum1(numsArray, targetToFind);

//--------------------------------------------------------------------

// Use a for loop and a hash table
// space complexity increased, but time complexity decreased instead
// time complexity: O(n), space complexity: O(n)
const findTwoSum2 = function (nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    }
    const numberToFind = target - nums[p];
    numsMap[numberToFind] = p;
  }

  return null;
};

findTwoSum2(numsArray, targetToFind);
