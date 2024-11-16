// detyr qe ka nje funksion qe sorton vargun pastaj gjen diferencen me te madhe te 2 antareve fqinj.

function insertionSort(vargu){
    for(let i=0; i<vargu.length; i++){
        let elementiQePoSortohet = vargu[i];
        let j=i-1;

        while(vargu[j] > elementiQePoSortohet){
            vargu[j+1] = vargu[j];
            j = j-1;
        }
        vargu[j+1] = elementiQePoSortohet;
    }



    function diferencaMaksimaleDyAntareveFqinj(){
        let diferenca_maksimale = 0;
    
        for(let i=0; i<vargu.length; i++){
            let diferenca = vargu[i] - vargu[i-1];
            
            if(diferenca > diferenca_maksimale){
                diferenca_maksimale = diferenca;
            }
        }
        return diferenca_maksimale;
    }


    return diferencaMaksimaleDyAntareveFqinj();
}



console.log(insertionSort([1, 6, 3, 15]));
