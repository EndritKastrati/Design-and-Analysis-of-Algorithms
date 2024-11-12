// Duke pasur parasysh një numër të plotë jo negativ x, ktheni rrënjën katrore të x të
// rrumbullaksuar poshtë në numrin e plotë më të afërt. Numri i plotë i kthyer duhet të jetë gjithashtu jo
// negativ. 
// Nuk duhet të përdorni asnjë built-in funksion/metodë ose operator.

// DETYRA ZGJIDHET NGJASHEM SI ALGORITMI BINARY-SEARCH:

function rrenja_katrore(numri){
   
    if(numri < 0){
        throw new error("Numri duhet te jete pozitiv!");
    }
    if(numri === 1 || numri === 0){
        
        return numri;
    }

    let left = 1;
    let right = numri;
    let rezultati = 0;

    while(left <= right){
        let mid = Math.floor((left+right) / 2);

        if(mid*mid === numri){
            return mid;
        }

        if(mid*mid < numri){
            left = mid + 1;
            rezultati = mid;
        } else{
            right = mid - 1;
        }
    }
    return rezultati;
}


console.log(rrenja_katrore(700));