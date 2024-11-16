function shellSort(vargu) {

    let n = vargu.length;
    let gap = (n / 2);
    let temp;

    for (gap; gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            
            temp = vargu[i];
            let j;
            
            for (j = i; j >= gap && vargu[j - gap] > temp; j -= gap) {
                vargu[j] = vargu[j - gap];
            }
            vargu[j] = temp;
        }
    }
    return vargu;
}

console.log(shellSort([8, 4, 5, 1, 9, 7, 6, 10, 3, 2]));
