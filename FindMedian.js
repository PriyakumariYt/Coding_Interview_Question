const FindMedian = (arr) => {
    arr.sort((a, b) => a - b);
    let length = arr.length;
    let medianIndex = Math.floor(length / 2);
    if (length % 2 === 0) {
        return Math.floor((arr[medianIndex] + arr[medianIndex - 1]) / 2);
    } else {
        return arr[medianIndex];
    }
}

console.log(FindMedian([7, 8, 9, 5, 4, 8, 6])); // Output: 7
console.log(FindMedian([6, 8, 2, 5, 8, 2])); // Output: 5
console.log(FindMedian([6, 8, 2, 5, 8]))