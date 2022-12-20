import { printMatrix } from "./utils/index.js"
import readLineSync from "readline-sync"
let matrix = new Array(2)
//matrix.fill(new Array(2)) gives unexpected output, refer Note.js
for(let i = 0; i < matrix.length; i++)
    matrix[i] = new Array(2)
console.log(matrix)
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
        matrix[i][j] = readLineSync.questionInt(`${i}${j} `)
    }
}
printMatrix(matrix)