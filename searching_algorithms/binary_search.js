function binarySearch(array, numKerkuar){

    let majt = 0;
    let djatht = array.length-1;

    while(majt <= djatht){

        let mesi = Math.floor((majt + djatht) / 2);

        if(array[mesi] === numKerkuar){
            return "Numri i kerkuar u gjet ne indexin: " + mesi;
        }
        else if(array[mesi] < numKerkuar){
            majt = mesi + 1;
        } 
        else{
            djatht = mesi + 1
        }

    }
    return "Numri nuk u gjet!";
}


console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100],  90));