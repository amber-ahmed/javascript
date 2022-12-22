// Write your code below
let bobsFollowers  = ['Job','Mop','Cop','Lol']
let tinasFollowers = ['Lol','Job','Hina']
let mutualFollowers = []
for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] == tinasFollowers[j]){//check if common
      mutualFollowers.push(tinasFollowers[j])
    }
  }
}
console.log(mutualFollowers)