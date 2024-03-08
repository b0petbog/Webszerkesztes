/*1.Leonardo numbers - Leonardo számok
A Leonardo számok egy számsorozat, amelyet a következők határoznak meg:

L(0) = 1 || 0
L(1) = 1 || 0
L(x) = L(x - 1) + L(x - 2) + 1
A fentieket egy kicsit általánosítva:

L(x) = L(x - 1) + L(x - 2) + a
Tegyük fel, hogy a az összeadási szám.

Feladat
Adjdvissza az első n Leonardo számot tömbként.

Bemenet
n : A megjelenítendő Leonardo számok száma
L0 : Az L(0) kezdeti értéke.
L1 : Az L(1) kezdeti értéke.
add : A hozzáadandó szám*/

function leonardoNumbers(n, L0, L1, add)
{
    let numbers=[L0, L1];
    for (let i=2;i<n;i++)
    {
        numbers[i]=numbers[i-1]+numbers[i-2]+add;
    }
    return numbers;
}

console.log(L(5, 1, 1, 1), [1, 1, 3, 5, 9]);
console.log(L(5, 0, 0, 2), [0, 0, 2, 4, 8]);
console.log(L(5, 0, 0, 0), [0, 0, 0, 0, 0]);
console.log(L(10, 0, 1, 4), [0, 1, 5, 10, 19, 33, 56, 93, 153, 250]);


/*------------------------------------------------------------------------------------------------------------
2. Every nth array element - Minden n-edik tömbelem
Hozz létre egy függvényt, amely egy tömb minden n-edik elemét visszaadja.

Használat:
Egy argumentummal (array) a tömb minden elemét visszaadja.
Két argumentummal, (array., interval) a tömb minden intervallumadik elemet visszaadja.
Három argumentummal, (array, interval, start_index) a tömb minden intervallumadik elemét visszaadja, kezdve a start_index indexszel.*/

function every(arr, interval, start) 
{
    let output= [];
    if(interval==NaN && start==NaN)
    {
        output=arr;
    }
    else if(start==NaN)
    {
        output[0]=arr[0];
        let count = 1;
        for(let i=1;i<arr.lenght;i++)
        {
            if(i%interval==0)
            {
                output[count]=arr[i];
                count++;
            }
        }
    }
    else
    {
        let newarr = [];
        let count = 0;
        for(let i=start;i<arr.lenght;i++)
        {
            newarr[count]=arr[i];
            count++;
        }
        let newcount = 0;
        output[0]=newarr[0];
        for(let i=1;i<newarr.lenght;i++)
        {
            if(i%interval==0)
            {
                output[count]=newarr[i];
                count++;
            }
        }

    }
    return output;
}

console.log(every([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 1), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 2), [0, 2, 4]);
console.log(every([0, 1, 2, 3, 4], 3), [0, 3]);
console.log(every([0, 1, 2, 3, 4], 3, 1), [1, 4]);



/*--------------------------------------------------------------------------------------------------------------------------------------------------------------
3. Odd Ones Out! - Páratlanok!Kapsz egy számok listáját. A számok mindegyike bizonyos számúszor ismétlődik. 
Távolítsd el az összes olyan számot, amely páratlanul ismétlődik, miközben minden más számot változatlanul hagysz.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]

A fenti példában:

az 1-es szám kétszer jelenik meg
a 2-es szám egyszer jelenik meg
a 3-as szám háromszor jelenik meg
A 2 és a 3 egyaránt páratlan számú alkalommal jelenik meg, ezért a listából eltávolítjuk őket. A végeredmény a következő: [1,1]*/

function oddOnesOut(nums) 
{
    let count;
    for(i=0;i<nums.lenght;i++)
    {
        count = 0;
        for(j=0;j<nums.lenght;j++)
        {
            if(nums[i]==nums[j])
            {
                count++;
            }
        }
    }
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);