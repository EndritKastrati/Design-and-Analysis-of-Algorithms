function radixSort(vargu) {
    let vargu1 = [];
    let vargu10 = [];
    let vargu100 = [];


    function sortimi(vargu, pozita) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let numri of vargu) {
            const shifra = Math.floor(numri / pozita) % 10;
            buckets[shifra].push(numri);
        }

        return [].concat(...buckets);
    }


    vargu1 = sortimi(vargu, 1);
    vargu10 = sortimi(vargu1, 10);
    vargu100 = sortimi(vargu10, 100);

    return vargu100;
}

console.log(radixSort([8, 4, 5, 1, 9, 7, 6, 10, 3, 2]));
