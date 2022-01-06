/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  let i: number = 0;
  let odds: number[] = [];
  let evens: number[] = [];
  let final: number[] = [];

  while (i < nums.length) {
    if (nums[i] % 2) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }

    i++;
  }

  odds.map((odd: number) => final.push(odd));
  evens.map((even: number) => final.push(even));

  return final;
}
// @lc code=end
