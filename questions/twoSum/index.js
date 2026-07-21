/** Two Sum **
 * 
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 * 
 / ABSOLUTE BRUTE FORCE SOLUTION

  for (let i = 0; i < nums.length; ++i) {
    console.log(`loop ${i}`);
    for (let j = 0; j < nums.length; ++j) {
        console.log(nums[i], nums [j]);
    }
  }

  //REMOVE LAST ITERATION**/

  for (let i = 0; i < nums.length; ++i) {
    console.log(`loop ${i}`);
    for (let j = I + 1; j < nums.length; ++j) {
        console.log(nums[i], nums [j]);
    }
  }

const twoSum = (nums, target) => {
   
}

module.exports = twoSum;
