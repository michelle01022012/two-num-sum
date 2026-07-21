const nums = [1, 2, 4, 9]
const target = 13

const map = new Map();

for (let i = 0; i < nums.length -1;  ++i) {
  console.log(`loop ${i}`)
  for (let j = i + 1; j < nums.length; ++j) {
    console.log(nums [i], nums[j])
  
  }
}