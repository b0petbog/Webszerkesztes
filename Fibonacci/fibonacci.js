function doFibonacci(end)
{
    let tomb = [];
    for(let i=0;i<end;i++)
    {
        if(i==0)
        {
            numbers[i]=0;
        }
        else if(i==1)
        {
            numbers[i]=1;
        }
        else
        {
            tomb[i]=tomb[i-2]+tomb[i-1];
        }
    }
    return tomb[end];
}

console.log(doFibonacci(20));