function fibs(number) {
    if (number <= 1) {
        return [0];
    }
    let sequence = [0, 1];
    // Start i at 2 because we already have fibonacci values for index 0 & 1 in the sequence.
    for (let i = 2; i < number; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence;
}


console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]