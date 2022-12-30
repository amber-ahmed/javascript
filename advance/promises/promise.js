//promises are the special object return by a asynchronous functions , at beginning it returns
//undefined object, later after function is executed it add values of it to the promises
//suppose below function is asynchronous  function and return object res that is promise
function createData(){
    let res = { name : 'ahmed', age : ""}
    setTimeout((age) => age = 22,1000)
    return res
}
var promise = createData()
console.log(promise)
/*
above line will call createDate(), when it is called object res has name with 'ahmed and age with empty
then in third line there is setTimeOut which assign the value to age, as settimeout is
asynchronous it wll go to the queue and wait for 1000 ms meanwhile return will last line
of crateDate will execute and it returns the object which has name as 'ahmed' and age is empty
and when we print promise it will show name 'ahmed' and age empty, after 1000ms
age is assign 22, if it is not promise then there will be no change in promise object and if we print after 1000ms then also
it will print age empty, but here createData() is returning promise so it also change the
data of promise object.
One more things we can do with promise is that we can use promise object only when
promise function is completely executed, it can be done by .then() method, for example we can use promise only 
when createData() has completely executed with setTimeOut
like below
*/
/promise.then()
//.then() will execute when only createData() has compelety executed
//here we take just example for promise,  createData() is not 
