function selectionSort(vargu){

    let n = vargu.length;
    let temp;

    for(let i=0; i<n-1; i++){

        let min_index = i;
        for(let j=i+1; j<n; j++){
            if(vargu[j] < vargu[min_index]){
                min_index = j;
            }
        }

        temp = vargu[i];
        vargu[i] = vargu[min_index];
        vargu[min_index] = temp;
    }
    return vargu;
}

console.log(selectionSort([8, 4, 5, 1, 9, 7, 6, 10, 3 , 2]));