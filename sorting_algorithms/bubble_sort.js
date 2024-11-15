function bubbleSort(arr){

    let n = arr.length;
    let temp, ndrruar;

    for(let i=0; i<n-1; i++){

        ndrruar = false;
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                ndrruar = true;
            }
        }
        if(ndrruar === false){
            break;
        }
    }
    return arr;
}


console.log(bubbleSort([8, 4, 5, 1, 9, 7, 6, 10, 3 , 2]));