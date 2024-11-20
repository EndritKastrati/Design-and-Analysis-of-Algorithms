function frekuenca(vargu) {
    let charCount = {};

    // Calculate the frequency of each character
    for (let i = 0; i < vargu.length; i++) {
        let char = vargu[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Bubble sort implementation for sorting the array
    let sortedArray = vargu.slice(); // Copy the array
    let n = sortedArray.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let currentChar = sortedArray[j];
            let nextChar = sortedArray[j + 1];

            // Compare based on frequency
            if (
                charCount[currentChar] < charCount[nextChar] || 
                (charCount[currentChar] === charCount[nextChar] && vargu.indexOf(currentChar) > vargu.indexOf(nextChar))
            ) {
                // Swap if the current character has lower frequency or appears later
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }

    return sortedArray;
}

// Test cases
console.log(frekuenca(['t', 'r', 'e', 'e'])); // Output: ['e', 'e', 't', 'r']
console.log(frekuenca(['c', 'c', 'c', 'a', 'a', 'a'])); // Output: ['a', 'a', 'a', 'c', 'c', 'c'] or ['c', 'c', 'c', 'a', 'a', 'a']
console.log(frekuenca(['b', 'a', 'b', 'a', 'c', 'b'])); // Output: ['b', 'b', 'b', 'a', 'a', 'c']
