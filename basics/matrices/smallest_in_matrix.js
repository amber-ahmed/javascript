import readLineSync from "readline-sync"
let row = readLineSync.questionInt('enter row number of first matrix ')
let col = readLineSync.questionInt('enter column number of first matrix ')
console.log('enter elements  matrix')
let matrix = new Array(row)
for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col)
}
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        matrix[i][j] = readLineSync.questionInt(`${i} ${j} `)
    }
}
console.log("matrix")
for (let i = 0; i < row; i++) {
    let str = ""
    for (let j = 0; j < col; j++) {
        str += matrix[i][j] + " "
    }
    console.log(str)
}


console.log("Smallest element in matrix")
let smallest = matrix[0][0]
let lRow = 0
let lCol = 0

for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
        if(smallest > matrix[i][j])
        {
            smallest = matrix[i][j]
            lRow = i
            lCol = j
        }
    }
}
console.log(smallest)
console.log(`At ${lRow} of ${lCol}`)
