function frekuencaSort(teksti) {
    const frekuenca = {};

    for (const shkronja of teksti) {
        frekuenca[shkronja] = (frekuenca[shkronja] || 0) + 1;
    }

    return Object.entries(frekuenca)
        .sort((a, b) => b[1] - a[1])    
        .map(([shkronja, numro]) => shkronja.repeat(numro))  
}

console.log(frekuencaSort("tree"));
