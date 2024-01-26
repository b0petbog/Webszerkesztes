//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.

function szamol(lista)
{
    let jegyek=lista.split();
    let ossz = 0;
    let db = 0;
    for(let i=0;i<jegyek.lenght;i++)
    {
        ossz+=jegyek[i];
        db++;
    }
    atlag= Math.round(ossz/db);
    return atlag;  
}