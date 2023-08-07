
function findFloor(arr, x) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let floor = -1;

    while (leftIdx <= rightIdx) {
        let mid = Math.floor((leftIdx + rightIdx) / 2);

        if (arr[mid] === x) {
            return arr[mid];
        } else if (arr[mid] < x) {
            floor = arr[mid]; 
            leftIdx = mid + 1; 
        } else {
            rightIdx = mid - 1;
        }
    }

    return floor;
}

module.exports = findFloor