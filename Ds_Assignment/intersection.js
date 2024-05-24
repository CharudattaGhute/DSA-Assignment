// Find the Intersection of Two Arrays
// Given two arrays, write a program to find their intersection.
// The intersection should contain only the unique elements present in both arrays.

function intersection(arr1, arr2) {
  const set1 = new Set(arr1);

  const intersectionSet = new Set();

  for (const element of arr2) {
    if (set1.has(element)) {
      intersectionSet.add(element);
    }
  }

  return Array.from(intersectionSet);
}

const array1 = [1, 2, 2, 1];
const array2 = [2, 2];
console.log(intersection(array1, array2));
