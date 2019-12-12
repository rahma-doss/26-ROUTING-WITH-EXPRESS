const express = require('express')

const app = express()

//Express MiddleWare

// addrequesDate = (req, res, next) => {
//     let requesAT = new Date().getHours()
//     console.log(requesAT)
//     if (requesAT < 8 && requesAT > 17) res.sendFile(__dirname + "/public/offline.html");
//     else { res.sendFile(__dirname + "/public/home.html") }
//     next()
// }

// Express: static routes
app.get('/home', (req, res) => {
    let requesAT = new Date().getHours()
    console.log(requesAT)
    if (requesAT < 8 && requesAT > 17) res.sendFile(__dirname + "/public/offline.html");
    else
   { res.sendFile(__dirname + "/public/home.html")}
})

app.get('/contact', (req, res) => {
    let requesAT = new Date().getHours()
console.log(requesAT)
if (requesAT< 8 && requesAT>17) res.sendFile(__dirname + "/public/offline.html");
   else { res.sendFile(__dirname + "/public/contact.html")}
})

app.get('/ourservices',  (req, res) => {
    let requesAT = new Date().getHours()
console.log(requesAT)
if (requesAT< 8 && requesAT>17) res.sendFile(__dirname + "/public/offline.html");
   else {res.sendFile(__dirname + "/public/ourservices.html")}
   })


// app.use(express.static(__dirname+'/public'))


app.listen(3000, (err) => {
    if (err) console.log('Server is not running')
    else console.log('Server is running on port 3000')
})