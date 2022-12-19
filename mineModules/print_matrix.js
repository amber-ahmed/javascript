function printMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        let str = ""
        for(let j = 0; j < matrix[i].length; j++){
            str += matrix[i][j] + "    "
        }
        console.log(str)
    }
}
export default printMatrix