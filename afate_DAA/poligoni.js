// detyr qe ka nje funksion qe sorton vargun pastaj zgjedh permes nje funksioni tjeter detyren e afatit me Poligona.

function insertionSort(nums){
    for(let i=0; i<nums.length; i++){
        let elementiQePoSortohet = nums[i];
        let j=i-1;

        while(nums[j] > elementiQePoSortohet){          // funksioni qe sorton vargun (kusht me vazhdu detyren).
            nums[j+1] = nums[j];
            j = j-1;
        }
        nums[j+1] = elementiQePoSortohet;
    }



    function poligoni() {
        if (nums.length < 3) return -1;
        
        let shumaAntareveVargut = 0;
        for(let i=0; i<nums.length; i++){           // me ket for-loop llogarisim shumen e krejt antarve ne varg.
            shumaAntareveVargut += nums[i];
        }

        
        for (let i = nums.length - 1; i >= 2; i--) {
            let largest = nums[i];
            let remainingSum = shumaAntareveVargut - largest;
            
            if (remainingSum > largest) {                           // logjika e detyres me poligona.
                return shumaAntareveVargut;
            }
            
            shumaAntareveVargut -= largest;
        }
        return -1;
    }   


    
    return poligoni();
}

console.log(insertionSort([1, 12, 1, 2, 5, 50, 3]));