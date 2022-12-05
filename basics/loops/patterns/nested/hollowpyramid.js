var r=5,c=9;
        for(var i =0;i<r;i++)
        {
        for(var j=0;j<c;j++)
        {
            if(j==(c/2)+i)
            {
                
                console.log(i+1);
            }
            else if(j==(c/2)-i)
            {
                console.log(i+1);
            }
            else if(i==r-1&&j%2==0)
            console.log(i+1);
            else
            {
                console.log(" ");
            }
           
        }
console.log();
    }