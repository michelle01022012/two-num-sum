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
    for (let j = 0; j < nums.length; ++j)) {
       if (mapDifferenceToIndex.has(nums[i])) {
         return [mapDifferenceToIndex.get(nums[i]), i]
       }
         const differnce = target - nums[i]
         mapDifferenceToIndex.set(difference, i);
     }
  }
  /TOP TECH SOLUTION  150 - 200K
   const twoSum = (nums, target) => {
    const mapDifferenceToIndex = New Map();

    for (let i = 0; i < nums.length; ++i){
    }
    }

  //MID LEVEL SOLUTION** 80 - 100K
  // 0(n^2) time | 0(1) space
  for (let i = 0; i < nums.length; ++i) {
    const twoSum = (nums, target) => {
    for (let j = I + 1; j < nums.length; ++j) {
        if (nums[i] + nums[j] === target) {
            return [i, j]
        }
      }
    }
  }

  //JUNIOR LEVEL SOLUTION** 60 - 80K
 // const twoSum = (nums, target) => {
 // for (let i = 0; i < nums.length; ++i) {
 //   console.log(`loop ${i}`);
 // for (let j = I + 1; j < nums.length; ++j) {
 //   if (nums[i] + nums[j] === target){
 //     return [i, j]
 //   }
 // }
    
  

//DO NOT EDIT BELOW THIS LINE
module.exports = twoSum;
