function spuare(n)
{
    let t=[];
    if(n<0)
    {
        return "Rossz bemenet";
    }
    for(let i=0;i<n;i++)
    {
        for(let j=0;j>0;j++)
        {
            if(j<=i)
            {
                return t.push(i);
            }
            else
            {
                return t.push(0);
            }
        }
    }
    return t;
}