let arr = [10,-5,7,15,64,23,-11,28,5]

let posEle = whaToDo(arr,x => x >= 0)
console.log(posEle)

let evens = whaToDo(arr,x => (x%2 == 0))
console.log(evens)

let primes = whaToDo(arr,x => { if(x < 2)return false;for(let i = 2;i <= x/2;i++){if(x%i==0)return false;}return true})
console.log(primes)

function whaToDo(arr,callback){
    let posArr = []
    for(const x of arr){
        if(callback(x))
            posArr.push(x)
    }
    return posArr
}