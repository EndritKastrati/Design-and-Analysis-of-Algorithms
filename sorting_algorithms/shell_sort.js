function shellSort(vargu) {

    let nrElementeve = vargu.length;
    let gap = Math.floor(nrElementeve / 2);

    for (gap; gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < nrElementeve; i++) {
            let temp = vargu[i];
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
