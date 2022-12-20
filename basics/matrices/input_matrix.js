import readLineSync from "readline-sync"
import printMatrix from "./print_matrix.js"
import chalk from "chalk"
function inputMatrix(){
    let rows = readLineSync.questionInt("enter number of rows ")
    let cols = readLineSync.questionInt("enter number fo columns ")
    if(rows != cols)
    {
        console.log("Not square matrix")
        return [[]]
    }
    else{
    let matrix = new Array(rows)
    // for(let i = 0; i < matrix.length; i++){
    //     matrix[i] = []
    // }
    for(let i = 0; i < rows; i++){
        matrix[i]=[]
        for(let j = 0; j < cols; j++){
            if(i == j || i == (rows - j -1))
            matrix[i][j] = chalk.red(readLineSync.questionInt(`A${i}${j} `))
            else
            matrix[i][j] = readLineSync.questionInt(`A${i}${j} `)
        }
    }
    return matrix
}
}
let matrix = inputMatrix()
printMatrix(matrix)
export default inputMatrix