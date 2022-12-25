function highestFacts(num){
let first = 1
let second = num
for(let i = 2; i <= num/2; i++){
    if(num%i == 0){
        if(i > first && i < second){
            first = i
            second = num/i
        }
    }
}
return [first,second]
}
export default highestFacts
console.log(highestFacts(50))