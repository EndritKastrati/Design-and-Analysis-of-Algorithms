function F5(){
    let n=4;

    for(let i=1; i<=n; i++){
        for(let j=1; j<=(i*i); j++){
            for(let k=1; k<=(n/2); k++){
                console.log("Tung");
            }
        }
    }
}

F5();

// Unaza e pare ekzekutohet n, e dyta n^2 e treta n.
// Kompleksiteti kohor: n^4.