// Three Consecutive Odds
// https://leetcode.com/problems/three-consecutive-odds/submissions/
// [1,3,5,4,5] --> true; [1,2,4,3,5] --> false

function threeConsecutiveOdds(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 2]) {
      if (arr[i] % 2 && arr[i + 1] % 2 && arr[i + 2] % 2) {
        return true;
      }
    }
  }

  return false;
}
