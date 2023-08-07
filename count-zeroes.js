function countZeroes(arr) {
    let firstZero = findFirst(arr);
    if (firstZero === -1) return 0;

    return arr.length - firstZero;
}

function findFirst(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let result = -1;

    while (leftIdx <= rightIdx) {
        let mid = Math.floor((leftIdx + rightIdx) / 2);

        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            result = mid;
            break;
        } else if (arr[mid] === 1) {
            leftIdx = mid + 1;
        } else {
            rightIdx = mid - 1;
        }
    }

    return result;
}


module.exports = countZeroes