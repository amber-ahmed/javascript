console.log("line 1")
print(() => console.log('line 2'))
console.log("line 3")

function print(fun){
  console.log('before')
  fun()
  console.log('after')
}
