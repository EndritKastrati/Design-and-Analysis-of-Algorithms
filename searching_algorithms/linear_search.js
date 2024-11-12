function linearSearch(vargu, numriKerkuar){

    for(let i=0; i<vargu.length; i++){
         if(vargu[i] === numriKerkuar){
             return "Numri i kerkuar " +vargu[i]+ " ndodhet ne indexin: " + i;
         }
    }
 
    return "Numri nuk u gjet!";
 
 }
 
 console.log(linearSearch([30, 15, 10, 2, 50, 85, 90],  85));