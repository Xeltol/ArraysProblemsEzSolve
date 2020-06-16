/*
  Remove duplicate numbers
*/

let nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9]

//spread operator
let uni_nums = [...new Set(nums)];

// 2nd Solution
let uni_nums = Array.from(new Set(nums));

console.log(uni_nums)
