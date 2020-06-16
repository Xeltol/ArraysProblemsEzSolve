/* 
  You have to sum all numbers in array
  
  Нужно сложить все числа в массиве
*/

let nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9]

let sum = nums.reduce((x, y) => x + y);

console.log(sum)
