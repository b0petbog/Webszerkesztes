function every(arr, interval, start) 
{
    let output= [];
    if(interval==NaN && start==NaN)
    {
        output=arr;
    }
    else if(start==NaN)
    {
        output[0]=arr[0];
        let count = 1;
        for(let i=1;i<arr.lenght;i++)
        {
            if(i%interval==0)
            {
                output[count]=arr[i];
                count++;
            }
        }
    }
    else
    {
        let newarr = [];
        let count = 0;
        for(let i=start;i<arr.lenght;i++)
        {
            newarr[count]=arr[i];
            count++;
        }
        let newcount = 0;
        output[0]=newarr[0];
        for(let i=1;i<newarr.lenght;i++)
        {
            if(i%interval==0)
            {
                output[count]=newarr[i];
                count++;
            }
        }

    }
    return output;
}