import readLineSync from "readline-sync"
function inputMatrix(){
    let rows = readLineSync.questionInt("enter number of rows ")
    let cols = readLineSync.questionInt("enter number fo columns ")

    let matrix = new Array(rows)
    // for(let i = 0; i < matrix.length; i++){
    //     matrix[i] = []
    // }
    for(let i = 0; i < rows; i++){
        matrix[i]=[]
        for(let j = 0; j < cols; j++){
            matrix[i][j] = readLineSync.questionInt(`A${i}${j} `)
        }
    }
    return matrix
}
export default inputMatrix