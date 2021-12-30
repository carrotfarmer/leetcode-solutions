// Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/
// Input: [1, 2, 3], Output: [1, 2, 3, 1, 2, 3]

function getConcatenation(nums: number[]): number[] {
  let concat = nums;
  nums.map((num: number) => concat.push(num));
  return concat;
}
