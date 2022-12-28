import readlineSync from 'readline-sync'
import chalk
    from 'chalk'
let res = []
res.push(chalk.dim(1)); res.push(chalk.dim(2)); res.push(chalk.dim(3)); res.push(chalk.dim(4));
res.push(chalk.dim(5)); res.push(chalk.dim(6)); res.push(chalk.dim(7)); res.push(chalk.dim(8));
res.push(chalk.dim(9));
playerTurn(res, true)

function playerTurn(res, turn) {
    print(res)
    let symbol = ''
    let flag
    if (turn) {
        symbol = 'X'
        flag = true
    }
    else {
        symbol = 'O'
        flag = false
    }

    console.log(`\n${symbol} player turn`)
    let input = readlineSync.questionInt('enter your move : ')
    let inputCheck = res[input - 1]
    if (inputCheck == '\x1B[97mX\x1B[39m' || inputCheck == '\x1B[97mO\x1B[39m') 
        playerTurn(res,flag)

    res[input - 1] = chalk.whiteBright(symbol)
    if (judge(res, chalk.whiteBright(symbol)))
        return
    playerTurn(res, !flag)
}
function judge(arr, symbol) {
    //console.clear()
    if ((arr[0] == symbol && arr[1] == symbol && arr[2] == symbol) ||
        arr[0] == symbol && arr[4] == symbol && arr[8] == symbol ||
        arr[0] == symbol && arr[3] == symbol && arr[6] == symbol ||
        arr[1] == symbol && arr[4] == symbol && arr[7] == symbol ||
        arr[2] == symbol && arr[5] == symbol && arr[8] == symbol ||
        arr[2] == symbol && arr[4] == symbol && arr[6] == symbol ||
        arr[3] == symbol && arr[4] == symbol && arr[5] == symbol ||
        arr[6] == symbol && arr[7] == symbol && arr[8] == symbol) {
        print(arr)
        console.log(symbol, 'player won')
        return true
    }
    else if (arr[0] != '\x1B[2m1\x1B[22m' && arr[1] != '\x1B[2m2\x1B[22m' &&
        arr[2] != '\x1B[2m3\x1B[22m' && arr[3] != '\x1B[2m4\x1B[22m' &&
        arr[4] != '\x1B[2m5\x1B[22m' && arr[5] != '\x1B[2m6\x1B[22m' &&
        arr[6] != '\x1B[2m7\x1B[22m' && arr[7] != '\x1B[2m8\x1B[22m' &&
        arr[8] != '\x1B[2m9\x1B[22m') {
        print(arr)
        console.log('Game tied')
       // console.log(arr)
        return true
    }
    else
        return false
}

function print(res) {
    let spaces = '  '
    let line = chalk.whiteBright('|')
    let str = `${spaces}${res[0]}${spaces}${line}${spaces}${res[1]}${spaces}${line}${spaces}${res[2]}\n\
${chalk.whiteBright('----------------')}\n\
${spaces}${res[3]}${spaces}${line}${spaces}${res[4]}${spaces}${line}${spaces}${res[5]}\n\
${chalk.whiteBright('----------------')}\n\
${spaces}${res[6]}${spaces}${line}${spaces}${res[7]}${spaces}${line}${spaces}${res[8]}`
    console.clear()
    console.log(str)
   // console.log(res[0])
}