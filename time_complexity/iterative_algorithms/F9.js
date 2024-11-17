function F9(){
 
    while(n>1){
        n = (n/2);
    }

}


// Nese n osht fuqi i 2-shit (1,2,4,8,16....), n-do ekzekutohet aq sa eshte fuqia e 2-shit: (2^0, 2^1, 2^2,....2^k).
// Nese n nuk osht fuqi e 2-shit, p.sh: n=20,do kalojm ne unazen: n=20 -> n=10 -> n=5 -> n=2 (pra logn).
// Kompleksiteti kohor: logn. (me baze 2, nese do ishte n/3 do ishte baza 3 etj...).