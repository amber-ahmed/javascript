/*
zero values
*/
console.log("logical not");
console.log(!(10 >  5 && 100 < 120 && 5 > 6));
console.log(!("" || 0 || undefined || null || NaN || "hello"));
console.log(10&5);//bitwise and
/*
   10  =  1  0  1  0
   5   =  0  1  0  1
10 & 5 =  0  0  0  0
*/
console.log(10&7);
console.log(6|9);//bitwise or
/*
    6 =  0  1  1  0
    9 =  1  0  0  1
6 | 9 =  1  1  1  1
*/
console.log(15^12);
/*
   15  = 1  1  1  1
   12  = 1  1  0  0
15 ^ 12= 0  0  1  1=3
*/
console.log(~5);//bitwise not
var a=10,b=5;
console.log(a&=b)//same as a=a&b called short hand notation