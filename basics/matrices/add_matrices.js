import readLineSync from "readline-sync"
let row1 = readLineSync.questionInt('enter row number of first matrix ')
let col1 = readLineSync.questionInt('enter column number of first matrix ')
console.log('enter elements of first matrix')
let matrix = new Array(row1)
for (let i = 0; i < row1; i++) {
    matrix[i] = new Array(col1)
}
for (let i = 0; i < row1; i++) {
    for (let j = 0; j < col1; j++) {
        matrix[i][j] = readLineSync.questionInt(`${i} ${j} `)
    }
}
console.log("matrix1")
for (let i = 0; i < row1; i++) {
    let str = ""
    for (let j = 0; j < col1; j++) {
        str += matrix[i][j] + " "
    }
    console.log(str)
}

let row2 = readLineSync.questionInt('enter row number of first matrix ')
let col2 = readLineSync.questionInt('enter column number of first matrix ')
if(row1 != row2 && col1 != col2)
    console.log("cannot perform addtion on unequal matrices")
else{
console.log('enter elements of second matrix')
let matrix2 = new Array(row1)
for (let i = 0; i < row2; i++) {
    matrix2[i] = new Array(col2)
}
for (let i = 0; i < row2; i++) {
    for (let j = 0; j < col2; j++) {
        matrix2[i][j] = readLineSync.questionInt(`${i} ${j} `)
    }
}
console.log("matrix2")
for (let i = 0; i < row2; i++) {
    let str = ""
    for (let j = 0; j < col2; j++) {
        str += matrix2[i][j] + " "
    }
    console.log(str)
}

console.log("Addtion")
let sum = []
for (let i = 0; i < row1; i++) {
    sum[i] = []
}
for(let i = 0; i < row1; i++){
    for(let j = 0; j < col1; j++){
        sum[i][j] = matrix[i][j] + matrix2[i][j]
    }
}
for (let i = 0; i < row1; i++) {
    let str = ""
    for (let j = 0; j < col1; j++) {
        str += sum[i][j] + " "
    }
    console.log(str)
}
}