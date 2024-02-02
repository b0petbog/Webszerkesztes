let inNumbers = "454793";

function insertDash(numbers)
{
    let tomb = numbers.split();
    let ujstring = "";
    for(let i=1;i<tomb.lenght+1;i++)
    {
        if(tomb[i-1]%2==1 && tomb[i]%2==1)
        {
            ujstring+="-"
        }
        ujstring+=tomb[i];
    }
    return ujstring;
}

console.log(insertDash(inNumbers));