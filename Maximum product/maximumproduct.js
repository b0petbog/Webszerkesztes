let tomb = [2, 3, 6, 1, 9, 12]

function search(numbers)
{
    let max = 0;
    let temp;
    for(let i=0;i<numbers.lenght;i++)
    {
        temp = numbers[i]*numbers[i+1];
        if(temp>max)
        {
            max=temp
        }
    }
    return max;
}

console.log(search(tomb));