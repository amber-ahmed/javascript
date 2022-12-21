import { inputMatrix,printMatrix } from "./utils/index.js";
let matrix1 = inputMatrix()
let matrix2 = inputMatrix()
function sumOfMatrix(matrix1,matrix2){
    if(matrix1.length != matrix2.length || matrix1[0].length != matrix2[0].length){
        console.log("Cannot perform addtion on unequals matrices")
        return[[]]
    }
    else{
        let sum = []
        for(let i = 0; i < matrix1.length; i++){
            sum[i] = []
            for(let j = 0; j < matrix1[0].length; j++){
                sum[i][j] = matrix1[i][j] + matrix2[i][j]
            }
        }
        return sum
    }
}
let result = sumOfMatrix(matrix1,matrix2)
printMatrix(result)