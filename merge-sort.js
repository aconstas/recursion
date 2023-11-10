function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves back together
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from the left and right subarrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from both subarrays
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));

}

console.log(mergeSort([8, 5, 3, 4, 2, 7, 9, 1, 10, 6])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// pseudocode
// Sort the left half of the array
// Sort the right half of the array
// Merge the two halves together