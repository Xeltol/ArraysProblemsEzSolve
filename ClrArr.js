/*
  Очистить массив
*/

let nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9];

// 1st Solution
nums = [];

// 2nd Solution (Right)
nums.splice(0, nums.length)
console.log(nums)
