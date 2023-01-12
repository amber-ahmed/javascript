import readlineSync from 'readline-sync'
function continueApp(msg){
    let shouldContinue = readlineSync.question(msg + " (Y/n) : ");
    if(shouldContinue === "y" ||
    shouldContinue === "Y" ||
    shouldContinue === "yes")
    {
        return true
    }
    return false
}
export default continueApp