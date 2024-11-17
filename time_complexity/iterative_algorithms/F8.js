function F8(){
    let n=4;

    for(let i=(n/2); i<=n; i++){
        for(let j=1; j<=n; j=(j*2)){
            for(let k=1; k<=n; k=(k*2)){
                console.log("Tung");
            }
        }
    }
}

F8();

// Unaza e pare ekzekutohet n, e dyta logn e treta logn.
// Kompleksiteti kohor: n((logn)^2).