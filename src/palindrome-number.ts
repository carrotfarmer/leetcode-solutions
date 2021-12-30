// Palindrome Number
// https://leetcode.com/problems/palindrome-number/
// check if a number is palindrome (reversed value is the same as original value)

function isPalindrome(x: number): boolean {
  const y: string = x.toString().split("").reverse().join("");
  return y === x.toString() ? true : false;
}
