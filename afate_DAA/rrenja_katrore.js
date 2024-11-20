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

    let majt = 1;
    let djatht = numri;
    let rezultati = 0;

    while(majt <= djatht){
        let mesi = Math.floor((majt+djatht) / 2);

        if(mesi*mesi === numri){
            return mesi;
        }

        if(mesi*mesi < numri){
            majt = mesi + 1;
            rezultati = mesi;
        } else{
            djatht = mesi - 1;
        }
    }
    return rezultati;
}


console.log(rrenja_katrore(9));  // del outputi: 3.