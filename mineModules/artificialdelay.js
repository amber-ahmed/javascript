function delay(ms){
let start = new Date().getTime()
let endTime = start
while(endTime < start + ms){
    endTime = new Date().getTime()
}
}
export default delay