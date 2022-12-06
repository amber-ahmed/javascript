var r=5,c=9;
        for(var i =0;i<r;i++)
        {
            var str = ""
        for(var j=0;j<c;j++)
        {
            if(j==Math.trunc((c/2))+i || j==Math.trunc((c/2))-i || i==r-1&&j%2==0)
            {
                str+= i+1
               // console.log(i+1);
            }    
            else
            {
                str += " "
              //  console.log(" ");
            }
           
        }
        console.log(str)
console.log("");
    }