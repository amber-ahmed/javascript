import chalk from "chalk"
const print = console.log
print("Amber")
print(chalk.blue("Amber"))
print(chalk.blue("Hello") + "World" + chalk.red("!"))
print(chalk.blue.bgRed.bold('Hello World'))
print(chalk.blue('Hello','World!','Foo','bar','biz','baz'))
print(chalk.blue('Hello',chalk.yellow('World!'),'Foo','bar','biz','baz'))
print(`Hello World! ${chalk.red('Foo bar')} biz  baz`)

print(`
CPU : ${chalk.red('90%')}
RAM : ${chalk.green('40%')}
DISK : ${chalk.yellow('70%')}
`)
print(chalk.rgb(0,255,111)('Hi'))
let x = chalk.rgb(33, 237, 230)("storing chalk")
console.log(x)