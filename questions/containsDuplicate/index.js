/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 0(n^) time | 0(1) space
 */

// Optimal Solution
const containsDuplicate = (nums) => {
    const set = new Set()

    for (let i = 0; i < nums.length; ++i) {
        if (set.has(nums[i])) {
            return true
        }
       set.add(nums[i])
}
    return false;
}

// sorting solution 80k - 100 k
// 0(nlog(n)) time | 0(n) space
//const containsDuplicate = (nums) => {
//  const sortedArr = nums.sort((a,b) => a - b) //0(n) space | 0(nlog(n)) time
//
//    for (let i = 0; i < sortedArr.length -1; ++i) { // 0(n) time
//        if (sortedArr[i] === sortedArr[i + 1]) {
//            return true;
//        }
//    }
//    return false;
//}
//const containsDuplicate = (nums) => {
//  for (let i = 0; i < nums.length -1; ++1) {
//       for (let j = i +1; i < nums.length)
//          if (nums[i] ===nums[j]) {
//             return true;
//    }
//   }
//   return false;
//}

module.exports = containsDuplicate;
