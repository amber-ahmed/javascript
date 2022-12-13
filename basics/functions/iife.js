var sum = (a,b) => {
    return a + b
}
console.log(sum(10,5));
//IIFE Immediatly Invoking Function Expression
(() => {
    console.log("This is IIFE")
  })();
