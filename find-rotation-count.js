function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      // If the array is not rotated (smallest element at the first index)
      if (arr[left] <= arr[right]) {
          return left;
      }

      let mid = Math.floor((left + right) / 2);
      let next = (mid + 1) % arr.length;
      let prev = (mid + arr.length - 1) % arr.length;

      // Check if the mid element is the smallest
      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
          return mid;
      }

      // Decide which half to search in
      if (arr[mid] >= arr[left]) {
          left = mid + 1; // Search in the right half
      } else {
          right = mid - 1; // Search in the left half
      }
  }

  return -1; // Error, the input array is not sorted
}


module.exports = findRotationCount