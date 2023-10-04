let arrSize = 100;
let arr = [];
for (let i = 0; i < arrSize; i++) {
  arr.push(Math.floor(100 * Math.random()));
}

let iterations = 0;

console.log('starting array: ', arr);

let partition = (arr, lo, hi) => {
  iterations++;
  let pivot = arr[hi];
  let idx = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      let tmp = arr[idx];
      arr[idx] = arr[i];
      arr[i] = tmp;
    }
  }
  idx++
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  return idx;
}

let qs = (arr, lo, hi) => {

  // base case
  if (lo >= hi) {
    return;
  }

  let pivot = partition(arr, lo, hi);



  qs(arr, lo, pivot - 1);
  qs(arr, pivot + 1, hi);
}



qs(arr, 0, arr.length - 1);
console.log('sorted array: ', arr);
console.log('iterations: ', iterations);
