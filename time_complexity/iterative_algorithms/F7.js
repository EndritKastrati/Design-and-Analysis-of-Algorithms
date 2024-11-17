function F7(){
    let n = 4;

    for(let i=(n/2); i<=n; i++){
        for(let j=1; j<=(n/2); j++){
            for(let k=1; k<=n; k=(k*k)){
                console.log("Tung");
            }
        }
    }
}

F7();

// Unaza e pare ekzekutohet n, e dyta n e treta logn.
// Kompleksiteti kohor: n^2 logn.