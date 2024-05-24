// Count Frequency of Elements
// Given an array of n integers, write a program to count the frequency of each element in the array.

const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

const result = {};

for (let i = 0; i < array.length; i++) {
  if (array[i] in result) {
    result[arr[i]] = result[array[i]] + 1;
  } else {
    result[array[i]] = 1;
  }
}

console.log(result);
