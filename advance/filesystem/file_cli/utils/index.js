function timer(time) {
    return new Promise((resolve, reject) => {
        if (time < 0 || !time) {
            reject("Milliseconds are Required ")
        }
        setTimeout(() => {
            resolve("THis is coming from Promise");
        }, time);
    })
}
function randomStringGenerator(len) {
    var strArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    var numArr = "0123456789"
    var ranStrnNum = ""
    for (var i = 0; i < len; i++) {
        var ltrIndex = Math.floor(Math.random() * 52);
        var numIndex = Math.floor(Math.random() * 10)
        var ranNumorLtr = Math.round(Math.random())
        if (ranNumorLtr == 0)
            ranStrnNum += strArr[ltrIndex]
        else
            ranStrnNum += numArr[numIndex]
    }
    return ranStrnNum
}
export { timer,randomStringGenerator }