const myDate = new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toUTCString())
console.log(myDate.toLocaleString()) 

const myCreatedDate = new Date(2003,1,15).toDateString() // Sat Feb 15 2003 
// In JS months started from 0
console.log(myCreatedDate)
const myCreatedDate2 = new Date(2003,1,15, 14, 3).toLocaleString() // 2/15/2003, 2:03:00 PM
console.log(myCreatedDate2)
const myCreatedDate3 = new Date("2003-12-3").toLocaleString()
console.log(myCreatedDate3)
const myCreatedDate4 = new Date("3-12-2003").toLocaleString()
console.log(myCreatedDate4)

const myDate2 = Date.now()
console.log(myDate2)

console.log(myDate.getDay())
console.log(myDate.getFullYear())

const myDate3 = new Date()

const myDate4 = myDate3.toLocaleString("default",{
    timeStyle: "full",
})

console.log(myDate4)