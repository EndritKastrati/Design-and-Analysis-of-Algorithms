function insertionSort(vargu){
    for(let i=0; i<vargu.length; i++){
        let eS = vargu[i];
        let j=i-1;
        while(vargu[j] > eS){
            vargu[j+1] = vargu[j];
            j=j-1;
        }
        vargu[j+1] = eS;
    }
    return vargu[Math.floor(vargu.length/2)];
}

console.log(insertionSort([1,2,2,3,2,2,5]));