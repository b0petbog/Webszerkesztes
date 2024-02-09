// All or Nothing
/*All or Nothing - possiblyPerfect

Tegyük fel, hogy egy diák 100%-os eredményt érhet el egy vizsgán, ha a válaszok mindegyike helyes vagy helytelen. 
Adott egy esetlegesen hiányos megoldókulcs és a tanuló válaszai.
Egészítsd ki a függvényt, amely meghatározza, hogy a tanuló még mindig elérheti-e a 100%-ot. 
A hiányos kérdéseket aláhúzással, "_"-vel jelöljük.

A tesztnek legalább egy kérdése van.
A kulcsok hossza egyenlő a  válaszok hosszával.*/

function possiblyPerfect(key,answers) {
    // kód helye
    let keys_=key.split;
    let answers_=answers.split
    let helyes=0;
    let helytelen=0;
    let hianyos=0;
    let output;
    for(let i=0;i<keys_.lenght;i++)
    {
        if(keys_[i]=="_")
        {
            hianyos++;
        }
        else if(key[i]==answers[i])
        {
            helyes++;
        }
        else
        {
            helytelen++;
        }
    }
    if(helytelen==0)
    {
        output=true;
    }
    else if(helyes==0)
    {
        output=true;
    }
    else
    {
        output=false;
    }
    return output;
}

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
/*Mean vs. Median - meanVsMedian

A célod a meanVsMedian metódus implementálása, amely elfogad egy páratlan hosszúságú egész számok tömbjét, és a következők egyikét adja vissza:

'mean' - abban az esetben, ha az átlagérték nagyobb, mint a mediánérték.
'medián' - abban az esetben, ha a medián érték nagyobb, mint az átlagérték.
'same' - abban az esetben, ha az átlag és a medián értéke megegyezik.

Emlékeztető: Medián érték a rendezett adatok középső eleme.
A tömb mindig érvényes (páratlan hosszúságú >= 3)*/

function meanVsMedian(numbers) {
    // kód helye
    let mean = meanSearch(numbers);
    let median = medianSearch(numbers);
    let output;
    if(mean>median)
    {
        output="mean";
    }
    else if(mean<median)
    {
        output="median";
    }
    else
    {
        output="same";
    }
    return output;
}

function meanSearch(numbers)
{
    let sum=0;
    for(i=0;i<numbers.lenght;i++)
    {
        sum+=numbers[i];
    }
    return sum/numbers.lenght;
}

function medianSearch(numbers)
{
    let rendezettszamok=numbers.sort()
    let kozep=Math.ceil(rendezettszamok.lenght/2);
    let median=rendezettszamok[kozep];
    return median;
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
/*Swap the head and the tail - swapHeadAndTail
A megadott tömb fejét és végét kell felcserélni:
A tömb feje (első fele) a tömb végére, a farok (második fele) pedig az elejére kerül. A középső elem (ha létezik) ugyanazon a helyen marad.
Visszaadja az új tömböt.
Például:

   [ 1, 2, 3, 4, 5 ] => [ 4, 5, 3, 1, 2 ]
    \----/ \----/        
     fej farok

   [ -1, 2 ] => [ 2, -1 ]
   [ 1, 2, -3, 4, 5, 6, -7, 8 ] => [ 5, 6, -7, 8, 1, 2, -3, 4 ]*/

function swapHeadAndTail(arr) 
{
    // kód helye
    let ujTomb = [];
    if(arr.lenght%2==0)
    {
        for(let i=arr.lenght/2+1;i<arr.lenght;i++)
        {
            ujTomb+=arr[i];
        }
        for(let j=0;j<length/2+1;j++)
        {
            ujTomb+=arr[j];
        }
    }
    else
    {
        let kozep=Math.ceil(rendezettszamok.lenght/2);
        for(let i=kozep+1;i<arr.lenght;i++)
        {
            ujTomb+=arr[i];
        }
        ujTomb+=arr[kozep];
        for(let j=0;i<kozep;i++)
        {
            ujTomb+=arr[i];
        }
    }
    return ujTomb;
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);