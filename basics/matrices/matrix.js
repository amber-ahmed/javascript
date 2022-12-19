//1D array
let array = [1,2,3,4,5,6,7,8,9,10]
//2D arrays are called matrices
let matrix = [[1,2],[2,3]]// 2x2 matrix
/*
  0 1
 [1,2] 0
 [2,3] 1
 */
 console.log("printig 0th row 0th column ",matrix[0][0])
let dim2 = [[1,2],[3,4]]
console.log(dim2[0][0])
console.log(dim2[0][1])
console.log(dim2[1][0])
console.log(dim2[1][1])
console.log('matrix2')
/*
console.log(matrix2[0][0])
console.log(matrix2[0][1])
console.log(matrix2[0][2])

console.log(matrix2[1][0])
console.log(matrix2[1][1])
console.log(matrix2[1][2])

console.log(matrix2[2][0])
console.log(matrix2[2][1])
co
nsole.log(matrix2[2][2])
*/
let matrix2 = [[1,2,3],[2,4,8],[10,20,30]]
for(let i =0; i<matrix2.length;i++){
    let row = ""
    for(let j = 0; j < matrix2[i].length; j++){
        row += matrix2[i][j] + " "
       // console.log(matrix2[i][j])
    }
    console.log(row)
}
