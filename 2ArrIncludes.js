/*
  Найти общие числа в 2-х разных массивах
*/

let nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9];
let nums = [11, 22, 3, 44, 55, 5, 666, 100, 1];

let new_nums = [...new Set(nums)].filter(item => nums2.includes(item))

console.log(new_nums)
