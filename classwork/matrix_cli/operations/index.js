import readlineSync from "readline-sync";
import chalk from "chalk";

function printMatrix(arr) {
    for (let i = 0; i < arr.length; i++) {
        let str = "";
        for (let j = 0; j < arr[0].length; j++) {
            str += arr[i][j] + " ";
        }
        console.log(str);
    }
}

const inputMatrix = () => {
    console.log("Please Enter the Matrix Dimensions : ");
    const m = readlineSync.questionInt("Enter the number of rows : ");
    const n = readlineSync.questionInt("Enter the number of cols : ");
    let arr = new Array(m).fill().map((item) => new Array(n));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = readlineSync.questionInt(
                `Enter the value for A${i + 1}${j + 1}: `
            );
        }
    }
    return arr;
};

const highlightDiag = (arr) => {
    if (arr.length != arr[0].length) {
        console.log("\nThis matrix does not have diagonals");
        printMatrix(arr);
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let str = "";
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                str += chalk.red(arr[i][j]) + " ";
            } else if (i == arr.length - j - 1) {
                // j=n-i-1 >> i = n-j-1
                str += chalk.blue(arr[i][j]) + " ";
            } else str += arr[i][j] + " ";
        }
        console.log(str);
    }
};

const addMatrix = (a, b) => {
    if (a.length != b.length || a[0].length != b[0].length) {
        console.log(chalk.redBright("Invalid Matrices Entered"));
        return;
    }
    let matrixC = new Array(a.length).fill().map((item) => []);

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            matrixC[i][j] = a[i][j] + b[i][j];
        }
    }
    return matrixC;
};


export { inputMatrix, printMatrix, highlightDiag, addMatrix };