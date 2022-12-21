import chalk from "chalk";
function highlight(matrix){
    if(matrix.length != matrix[0].length)
        console.log("Cannot perform operation on non square matrix")
    else{
        for (let i = 0; i < matrix.length; i++) {
            let str = "";
            for (let j = 0; j < matrix[i].length; j++) {
                if(i == j || i == (matrix[0].length - j -1))
                    str = str + chalk.red(matrix[i][j]) + " "
                else
                str = str + matrix[i][j] + " "
            }
            console.log(str);
        }
    }
}
export default highlight