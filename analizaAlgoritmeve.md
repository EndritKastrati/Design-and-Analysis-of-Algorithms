# ALGORTIMET E SORTIMIT:#

## BUBBLE SORTI ##

n = elementet e vargut (vargu.length).
extra variabla: temp edhe ndrruar.

- ni for loop qe interon prej index i=0 deri te i<n-1 (pra deri tek gjatsia e vargut-1).
- mas for loopes e inicializojm ndrruar=false.
- ni for loop tjeter qe interon prej j=0 deri te i< n-i-1 (fqinji i antarit te me parshem).
- mas for loopes te dyt ni if qe kontrollon nese vargu[i] o ma i madh > se vargu[j+1], pra krahason antaret fqinj per me kqyr a mi ndrru a jo!. Nese po temp=vargu[j] dhe vargu[j]=vargu[j+1] dhe ndrruar=true. KURSE NE TE KUNDER MAS IF-E BOJM NI IF TJETER QE KQYR A O ndrruar==false (pra rastet qe sjon ndrru antaret fqinj) E BOJM break;
-tani nfund tfunksionit ni return vargu.

-printimi i vargut: console.log(bubbleSort([8, 4, 5, 1, 9, 7, 6, 10, 3 , 2])); - PRA PRINTOJM FUNKSIONIN QE KA SI PARAMTER VARGUN E JAPUR.





## SELECTION SORTI ##	

n = elementet e vargut (vargu.length).
extra variabla: temp.

- ni for loop qe interon prej index i=0 deri te i<n-1 (pra deri tek gjatsia e vargut-1).
- mas for loopes ni min_index = i;
- ni for loop tjeter qe interon prej j=i+1 (pra pej ku o antari i for loopes tpar +1 index) deri te fundi i vargut.
- mas for loopes te dyt ni if qe kontrollon nese antari ku ndodhet for loopes te dyt (vargu[j]) o ma i vogel se vargu[min_index], E BOJM min_indexin = j;
- pasi dalim prej if edhe for-loopit te dyt, e inicializojm: temp=vargu[i] -> vargu[i]=vargu[min_index] -> temp=vargu[min_index].
-tani nfund tfunksionit ni return vargu.

-printimi i vargut: console.log(selectionSort([8, 4, 5, 1, 9, 7, 6, 10, 3 , 2])); - PRA PRINTOJM FUNKSIONIN QE KA SI PARAMTER VARGUN E JAPUR.





## SHELL SORTI ##

n = elementet e vargut (vargu.length).
gap = n/2.

- ni for loop qe iteron prej (gap; gap>0; gap(gap/2)).
- meniher mrena ni for loop tjeter (i=gap; i<n; i++).
- e inicializojm temp=vargu[i].
- tani ni for loop tjeter |pra total three-nested-loops| - (j=1;    j>=gap-&&-vargu[j-gap]>temp;   j-=gap).
- mrena for loopes te trete vargu[j]=vargu[j-gap]
- mrena for loopes te dyte e masi tdalim prej se tretes: vargu[j]=temp.
-tani nfund tfunksionit ni return vargu.

-printimi i vargut: console.log(shellSort([8, 4, 5, 1, 9, 7, 6, 10, 3 , 2])); - PRA PRINTOJM FUNKSIONIN QE KA SI PARAMTER VARGUN E JAPUR.





## INSERTION SORTI ##
		
- ni for loop meniher qe iteron prej i=0 deri te i<vargu.length (pra deri tek gjatsia e vargut).
- pastaj caktojm variablen elementiQePoSortohet=vargu[i], dhe j=i-1.
- mrena for loopit perdorim nje while qe kontrollon rastet kur (vargu[j] > elementiQePoSortohet), dhe jep vargu[j+1] = vargu[j] dhe j=j-1;
- pasi dalim prej while, ne fund te for-loopit caktojme: vargu[j+1]=elementiQePoSortohet;
-tani nfund tfunksionit ni return vargu.

-printimi i vargut: console.log(insertionSort([8, 4, 5, 1, 9, 7, 6, 10, 3 , 2])); - PRA PRINTOJM FUNKSIONIN QE KA SI PARAMTER VARGUN E JAPUR.





# ALGORTIMET E KERKIMIT:#

## LINEAR/SEKUENCIAL SEARCH ##

- ni funksion qe merr si paramtra vargun dhe numrinQePoKerkohet.
- funksioni permban veq nje for loop qe interon neper antaret e vargut prej i=0; deri ne i<vargu.length.
- brenda kti for-loope ni if qe kontrollon nese antari:vargu[i] o == me numrinQePoKerkohet, nese o return true perndryshe return false/nuk u gjet.

console.log(linearSearch([30, 15, 10, 2, 50, 85, 90],  85));   -Printojm funksionin masi ja jepim parametrat.





## BINARY SEARCH ##
					
- ni funksion qe merr si paramtra vargun (qe vec duhet mu kon i sortum) dhe numrinQePoKerkohet.
- let majt=0; dhe let djatht=array.length-1;
- ni while me check kur (majt<=djatht), ku brenda kemi let mesi=(majt+djatht)/2  -Pra antari i mesit te vargut.
- Mrena kti while kemi 3 if qe kontrollojn 3 raste: 1.) KUR ANTARI I KERKUM O NE MES TE VARGUT (best-case scenario)
						    						2.) KUR ANTARI I KERKUM O MA I VOGEL SE ANTARI I MESIT.
						 						    3.) KUR ANTARI I KERKUM O MA I MADH SE ANTARI I MESIT.
						    
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80],  90));   -Printojm funksionin masi ja jepim parametrat.
