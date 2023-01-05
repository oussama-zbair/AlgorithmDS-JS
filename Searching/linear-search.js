// Implement the linear search algorithm in JavaScript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  // Test the linear search function
  console.log(linearSearch([5, 3, 8, 2, 1, 4], 3)); // 1
  console.log(linearSearch([10, 5, 3, 8, 2, 1, 4], 8)); // 3
  console.log(linearSearch([-2, 5, 3, 8, 2, 1, 4], 1)); // 5
  console.log(linearSearch([5, 3, 8, 2, 1, 4], 6)); // -1
  