const nums = [2, 1, 1, 2, 2, 2]
const nums2 = [1, 1, 1, 1, 2, 2]

const majorityElement = (nums) => {
  let candidate;
  let count = 0;

  for(let i = 0; i <= nums.length; nums++) {
    if (count === 0) {
      candidate = nums[i];
    }

    if (candidate === nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
}

console.log(majorityElement(nums)); // Output: [2]
console.log(majorityElement(nums2)); // Output: [1]