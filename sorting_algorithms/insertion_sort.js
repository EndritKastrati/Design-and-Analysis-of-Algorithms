function insertionSort(vargu){
    for(let i=0; i<vargu.length; i++){
        let pozitaKyqe = vargu[i];
        let j=i-1;

        while(vargu[j] > pozitaKyqe){
            vargu[j+1] = vargu[j];
            j = j-1;
        }
        vargu[j+1] = pozitaKyqe;
    }
    return vargu;
}

console.log(insertionSort([8, 4, 5, 1, 9, 7, 6, 10, 3 , 2]));