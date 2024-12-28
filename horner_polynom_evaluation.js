//METOD MI ZGJIDH POLINOMET, DUKE I ZBERTHY ATO NE EKUACIONE PA EKSPONENTA.
//RASTIN TONE E KEM SHQYRTU ZGJEDHJES E POLINOMIT: (2x^3 - 6x^2 + 2x - 1).

function horner_polinomi(polinomi, x, n){

    let rezultati = polinomi[0];

    for(let i=1; i<n; i++){
        rezultati = rezultati * x + polinomi[i];

    }

    return rezultati;

}

console.log(horner_polinomi([2,-6,2,-1], 3, 4));