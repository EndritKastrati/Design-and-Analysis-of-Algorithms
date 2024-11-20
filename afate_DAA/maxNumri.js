function maxNumri(vargu){
    let max_num = 0;
    for(let i=0; i<vargu.length; i++){
        if(vargu[i] > max_num){
            max_num = vargu[i];
        }
    }
    return max_num;
}

console.log(maxNumri([1,3,2,5,4,17,6,8,9,15]));