// Move All Zeros to End
// Given an array of n elements, write a program to move all zeros present in the array
// to the end without changing the order of non-zero elements.
function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }

  return arr;
}
const array = [0, 1, 0, 3, 12, 0, 5];
console.log(moveZerosToEnd(array));
