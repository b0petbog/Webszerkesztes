function ownedCat(catYears)
{
    let humanYears = 0;
    let tempCatYrs;
    while(tempCatYrs<catYears)
    {
        if(humanYears==0)
        {
            tempCatYrs+=15;
        }
        else if(humanYears==1)
        {
            tempCatYrs+=9;
        }
        else
        {
            tempCatYrs+=3;
        }
        humanYears++;
        return humanYears;
    }
}

function ownedDog(dogYears)
{
    let humanYears = 0;
    let tempDogYrs;
    while(tempDogYrs<dogYears)
    {
        if(humanYears==0)
        {
            tempDogYrs+=15;
        }
        else if(humanYears==1)
        {
            tempDogYrs+=9;
        }
        else
        {
            tempDogYrs+=3;
        }
        humanYears++;
        return humanYears;
    }
}