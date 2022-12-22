function isNum(num){
    if(num == null)
        return false
    num = num.toString()
    if(Object.is(+num, NaN) || Object.is(parseFloat(num), NaN))
        return false
    return true
}
export default isNum