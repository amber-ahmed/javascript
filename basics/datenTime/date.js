let d = new Date()// returns todays complete date
console.log(d)
let month = d.getMonth()//returns month of the d, months starts from 0 to 11,0 is january
console.log(month)
let date = d.getDate()//return  date of the d
console.log(date)
let usrDate = new Date('13-jan-2000')//converts inner string to date format
//let usrDate = '13-jan-2000', you cannot perform date methods on usrDate because it is string
let usrMonth = usrDate.getMonth()
console.log(usrMonth)
let usrYear = usrDate.getFullYear()
console.log(usrYear) 