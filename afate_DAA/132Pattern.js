function pattern(vargu){
    for(let i=0; i<vargu.length; i++){
        for(let j=i+1; j<vargu.length; j++){
            for(let k=j+1; k<vargu.length; k++){
    
                    if(vargu[k] < vargu[j]  &&  vargu[i] < vargu[k]){
                        return true;
                    }

            }
        }
    }
    return false;
}

console.log(pattern([3,1,4,2]));