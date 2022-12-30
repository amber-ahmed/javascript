let f
for(let  i = 0; i < 5; i++){
    function close(){
        console.log(i)
    }
    if(i ==  1)  
        f = close
}
f()

function counter(){
    var count = 0;
    return function incrementCounter(){
        count++
        console.log(count)
    }
}
var count1 = counter()
count1()
count1()
count1()
var count2 = counter()
count2()
count2()

function Counter(){
    var count = 0
    this.incrementCounter = function (){
        count++
        console.log(count)
    }
    this.decrementCounter = function (){
        count--
        console.log(count)
    }
}
var counter1 = new Counter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()
counter1.decrementCounter()
var counter2 = new Counter()
counter2.decrementCounter()
counter2.incrementCounter()