function faktorieli(numri){
    if(numri < 0){return -1;}
    if(numri === 1 || numri === 0){return 1;}

    // return numri * faktorieli(numri-1);             -me rekursion

    let rezultati = 1;
    for(let i=1; i<=numri; i++){
        rezultati *= i;                             // -me iteracion
    }
    return rezultati;
}

console.log(faktorieli(5));