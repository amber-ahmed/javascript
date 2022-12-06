var human = {
    "name" : "ahmed",
    "age" : 22,
    "height" : 5.7,
    weight : 65,
    "2something" : "bla"
}
console.log(human)
//console.log(human.2something)
console.log(human["2something"])
console.log(human.age)
console.log(human.weight)
human.age="hi"
console.log(human.age)
var animal = {
    "social_animal" : human,
    "carnivores" : ["lion","tiger","cheetah"]
}
console.log(animal.social_animal.name)
console.log(animal.carnivores[0])