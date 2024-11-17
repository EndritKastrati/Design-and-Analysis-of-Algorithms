function F11(){
    let k = 1;
    let n = 2 ** (2 ** k);      // n=4;

    for(let i=1; i<=n; i++){
        let j=2;
        while(j <= n){
            j = (j*j);

            console.log("Tung");
        }
    }
}

F11();

// Unaza e pare ekzekutohet n, kurse while-loop loglogn.
// Kompleksiteti kohor: n*loglogn.