/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
const getInstances = (arr: number[], inp: number): number => {
  let count = 0;
  let len = arr.length, i = 0;
  while (len > i) {
    if (arr[i] === inp) {
      count++;
    }

    i++;
  }

  return count;
};

function majorityElement(nums: number[]): number {
  let majorityElement: number;
  nums.map((num: number) => {
    if (getInstances(nums, num) > nums.length / 2) {
      majorityElement = num;
    }
  });

  return majorityElement;
}
// @lc code=end
