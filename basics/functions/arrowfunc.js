let print = () => { console.log("I am arrow function")}
print()
//arrow function can have parameters and return
let big = (a,b) => {
    if(a > b)
        return a
    return b
}
console.log(big(10,15))
//Arrow Functions Return Value by Default:
hello = () => "Hello World!";
console.log(hello())
// You can skip parenthesis and brackets and return if there is only one argument, one statement like below
let isEven = x => x % 2 == 0 ? true : false //returning
console.log(isEven(4))
//postive
let pos = x => x >= 0
console.log(pos(5))