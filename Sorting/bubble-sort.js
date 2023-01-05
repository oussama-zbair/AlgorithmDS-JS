// Implement the bubble sort algorithm in JavaScript
function bubbleSort(arr) {
    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          sorted = false;
        }
      }
    }
    return arr;
  }
  
  // Test the bubble sort function
  console.log(bubbleSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]
  console.log(bubbleSort([-10, -5, Math.log(5), 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8, 10]
  console.log(bubbleSort([-2, 5, 3, 8, 2, 1, 4])); // [-2, 1, 2, 3, 4, 5, 8]
  