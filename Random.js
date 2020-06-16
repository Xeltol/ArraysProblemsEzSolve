/*
  Рандомное число из массива
*/

let nums = [1 , 2, 11, 22, 3, 33];

let random_nums = nums[(Math.floor(Math.random() * (nums.length)))];

console.log(random_nums)
