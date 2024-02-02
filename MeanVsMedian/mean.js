let tomb = [1, 1, 2, 3, 3, 3, 4, 4, 5];

function median(numbers) 
{
    var median = 0;
    numbers.sort();
    if (numbers.length % 2 == 0)
    {
        median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    }
    else
    {
        median = numbers[(numbers.length - 1) / 2];
    }
    return median;
}

function mean(numbers) 
{
    var mean = 0;
    for (let i = 0; i < numbers.length; i += 1) 
    {
        mean += numbers[i];
    }
    return mean / numbers.length;
}

function meanVsMedian(numbers)
{
    if(median(numbers)>mean(numbers))
    {
        return "median";
    }
    else if(median(numbers)<mean(numbers))
    {
        return "mean";
    }
    else
    {
        return "same";
    }
}

console.log(meanVsMedian(tomb));
