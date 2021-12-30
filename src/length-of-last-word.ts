// Length of last word
// https://leetcode.com/problems/length-of-last-word
// "Hello World" --> 5; "I am cool" --> 4

function lengthOfLastWord(s: string): number {
  let arr = s.split(/[\s,\t,\n]+/).filter((elem: string) => elem !== "" && elem !== " " && elem !== "\t" && elem !== "\n");
  return arr.pop().length;
}
