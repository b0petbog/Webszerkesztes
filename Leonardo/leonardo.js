function doLeonardo(lenghtOfList, plusNumber)
{
    let tomb = [];
    for(let i=0;i<lenghtOfList;i++)
    {
        if(i==0 || i==1)
        {
            tomb[i]=0+plusNumber;
        }
        else
        {
            tomb[i]=tomb[i-1]+tomb[i-2]+plusNumber;
        }
    }
    return tomb;
}
console.log(doLeonardo(15, 2));