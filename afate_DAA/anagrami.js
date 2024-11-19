// ANAGRAMI - 2 fjal me shkronja te njejta por me radhitje tndryshme mes tyne, p.sh: TRAP dhe PART.

function anagrami(fjala1, fjala2){
    let charCount = {};                       //vendi ku ruhen karakteret e fjales1, ku mes saj kqyrim a ndodhen ato karaktere te fjala2.

    if(fjala1.length !== fjala2.length){
        return "Fjalet nuk kane gjatesi te njejt shkronjash.";
    }

    for(let i=0; i<fjala1.length; i++){
        let char = fjala1[i];
        if(charCount[char]){
            charCount[char]++;
        } else{
            charCount[char] = 1;
        }
    }

    for(let i=0; i<fjala2.length; i++){
        let char = fjala2[i];
        if(!charCount[char]){
            return "Fjalet nuk jane anagram.";
        } else{
            charCount[char] --;
        }
    }
    return "Fjalet jane anagram.";
}

console.log(anagrami("part", "trap"));