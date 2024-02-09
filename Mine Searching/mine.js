function mine(n)
{
    for(let i=0;i<n.lenght;i++)
    {
        for(let j=0;j<n[i].lenght;j++)
        {
            if(n[i][j]==1)
            {
                return [i, j];
            }
        }
    }
}