/*1. FeladatRemove First and Last Character Part Two
Adott egy karakterlánc, amely vesszőkkel elválasztott karaktersorozatokat tartalmaz.
Írj egy olyan függvényt, amely egy új karakterláncot ad vissza, amely az első és az utolsó karakterlánc kivételével ugyanazokat a karakterláncokat tartalmazza, 
de ezúttal szóközökkel elválasztva.
Ha a bemeneti karakterlánc üres, vagy ha az első és az utolsó elem eltávolítása miatt a kapott karakterlánc üres lenne, akkor adjon vissza egy üres értéket 
(az alábbi példákban NULLáltalános értékként szerepel).
Példa:
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"  
""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL*/

function RemoveFirstAndLast(adatok)
{
    let kimenet = [];
    let lista = [adatok.split(",")];
    if(lista.length==0 || lista.length==1 || lista.length==2)
    {
        kimenet = null;
    }
    else
    {
        for(let i=0;i<lista.length;i++)
        {
            if(i==0 || i==lista.length)
            {
                kimenet[i-1]=lista[i];
            }
        }
    }
    return kimenet;
}

/*2. Feladat
Is every value in the array an array?
A tömb minden értéke tömb?
Csak a tömb második dimenzióját kell tesztelnie. Az egymásba ágyazott tömbök értékeinek nem kell tömböknek lenniük. 

Példa:
[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false*/

function IsEveryValueAnArray(tomb)
{
    let belsotombok = 0;
    for(let i=0;i<tomb.length;i++)
    {
        if(tomb[i].type=="Array")
        {
            belsotombok++;
        }
    }
    if(belsotombok==tomb.length)
    {
        return true;
    }
    else
    {
        return false;
    }
}



/*3. Feladat
All or Nothing
Tegyük fel, hogy egy diák 100%-os eredményt érhet el egy vizsgán, ha a válaszok mindegyike helyes vagy helytelen. 
Adott egy esetlegesen hiányos megoldókulcs és a tanuló válaszai. Írj egy függvényt, amely meghatározza, hogy a tanuló még mindig elérheti-e a 100%-ot. 
A hiányos kérdéseket aláhúzással, "_" van jelölve.

Példa:
["A", "_", "C", "_", "B"]                           # válaszkulcs
["A", "D", "C", "E", "B"]                         # a tanuló megoldása  
➞ Igaz                                               # Lehetséges, hogy a tanuló minden kérdést helyesen válaszol.  

["B", "_", "B"]                                      # válaszkulcs
["B", "D", "C"]                                     # a tanuló megoldása.  
➞ Hamis                                          # Az első kérdés helyes, de a harmadik kérdés rossz, így nem lehetséges 100%-os pontszámot elérni.  

["T", "_", "F", "F", "F", "F"]                   # megoldókulcs
["F", "F", "T", "T", "T", "T"]                  # a tanuló megoldása  
➞ Igaz                                              # Lehetséges, hogy a tanuló minden kérdést rosszul válaszol.

További példák:
(["B", "A", "_", "_"], ["B", "A", "C", "C"]) ➞ True  
(["A", "B", "A", "_"], ["B", "A", "C", "C"]) ➞ True  
(["A", "B", "C", "_"], ["B", "A", "C", "C"]) ➞ False  
(["B", "_"], ["C", "A"]) ➞ True  (["B", "A"], ["C", "A"]) ➞ False  
(["B"], ["B"]) ➞ True  
(["_"], ["B"]) ➞ True*/

function AllOrNothing(megoldas, tanulovalaszok)
{
    let helyesvalasz=0;
    let helytelenvalasz=0;
    let ures = 0;
    for(let i=0;i<megoldas;i++)
    {
        if(megoldas[i]=="_")
        {
            ures++;
        }
        else if(megoldas[i]==tanulovalaszok[i])
        {
            helyesvalasz++;
        }
        else
        {
            helytelenvalasz++;
        }
    }
    if(helytelenvalasz==0 || helyesvalasz==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}