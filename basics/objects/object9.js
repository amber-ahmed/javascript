//Sets

/*
You can create a JavaScript Set by:
1. Passing an Array to new Set()
2. Create a new Set and use add() to add values
3. Create a new Set and use add() to add variables
4. Passing predfine array of elements  new Set()
*/
//1. Passing an Array to new Set()
const letters = new Set(['a','b','c'])
console.log(letters)
//2. Create a new Set and use add() to add values
const ltr = new Set()
ltr.add('a')
ltr.add('b')
ltr.add('c')
console.log(ltr)
//3. Create a new Set and use add() to add variables
const a = "a";
const b = "b";
const c = "c";
// Create a Set
const letters2 = new Set();
// Add Variables to the Set
letters2.add(a);
letters2.add(b);
letters2.add(c);
console.log(letters2)
//4. Passing predfine array of elements  new Set()
const arr = ['a','b','c']
const setLtr = new Set(arr)
console.log(setLtr)
//forEach method for sets
let text = "";
setLtr.forEach (function(value) {
  text += value + " "
})
console.log(text)
//values method
//returns iterable object
let val = setLtr.values()
console.log(val)
//you can access by for of loop
for(const x of val){
    console.log(x)
}
//Maps
/*
You can create a JavaScript Map by:
1. Passing an Array to new Map()
2. Create a Map and use Map.set()
*/
//1. Passing an Array to new Map()
const fruits = new Map([
    ["apples",500],
    ["mangoes",300],
    ["banana",150]
])
console.log(fruits)
//2. Create a Map and use Map.set()
const fruit = new Map()
fruit.set("apples",500)
fruit.set("mangors",400)
console.log(fruit)
//get value from map by key
console.log(fruits.get("banana"))
//has
//returns true if given key exist else false
console.log(fruits.has("pineapple"))
console.log(fruits.has("apples"))
//forEach method for map
let txt = ""
 fruits.forEach((value,key) => {
    txt += key + " " + value + "\n"
})
console.log(txt)
//Being able to use objects as keys is an important Map feature.
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};
// Create a Map
const mapFruits = new Map();
// Add the Objects to the Map
mapFruits.set(apples, 500);
mapFruits.set(bananas, 300);
mapFruits.set(oranges, 200);
console.log(mapFruits.get(apples))//Remember: The key is an object (apples), not a string ("apples"):