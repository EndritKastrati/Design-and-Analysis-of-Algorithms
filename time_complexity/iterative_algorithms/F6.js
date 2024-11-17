function F6(){
    let n = 5;

    for(let i=1; i<n; i=(i*2)){
        console.log("Tung");
    }
}

F6();

// Shohim se rritja e "i" nuk osht lineare por po dyfishohet per cdo here.
// Pra: (i = 1,2,4,8,16,....n) -> (2^0, 2^1, 2^2,....2^k).
// Shohim se unaza nuk do ndalet deri kur te arrij 2^k = n, nga kjo del se k=logn.
// Kompleksiteti kohor: logn.