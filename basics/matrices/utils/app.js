import { inputMatrix, printMatrix, highlightDiag, addMatrix } from "./operations/index.js";
import chalk from "chalk";
import readlineSync from "readline-sync";

const main = () => {
    console.clear();
    console.log(chalk.green("*************************************************"));
    console.log("\t\tMATRIX CLI \t\t");
    console.log(chalk.green("*************************************************"));


    console.log(`1. Press 1 to Find Diagonals of a Matrix 
\n2. Press 2 to Perform Matrix Addition
\n3. Press 3 to Perform Matrix Multiplication
\n4. Press 4 to Find Determinant of a Matrix
\n5. Press 5 to Multiply the Matrix with a Constant
\n6. Press 6 to Find Transpose of a Matrix
\n0. Press 0 to Exit\n`)

    let option = readlineSync.questionInt("Enter the Option you want to Perform : ");

    switch (option) {
        case 0:
            console.log("Thank you for Using our CLI, Bye!");
            break;
        case 1:
            console.clear();
            let matrix = inputMatrix();
            highlightDiag(matrix);
            break;
        case 2:
            let matrixA = inputMatrix();
            let matrixB = inputMatrix();
            let result = addMatrix(matrixA, matrixB);
            if (!result) {
                break;
            }
            console.log("The Sum of Given Matrices is : ");
            printMatrix(result);
            break;
        case 3:
            console.log("Multiplication should be Performed ");
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}