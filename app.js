const express = require("express");
const app = express();
const path = require("path")
app.use(express.static(path.join(__dirname, 'public')))


app.get("/", function (req, res) {
    let file = path.resolve("src", "contact.html")
    res.sendFile(file)
})
app.get("/contact", function (req, res) {
    let file = path.resolve("src", "contact.html")
    res.sendFile(file)
})
app.get("/en", function (req, res) {
    let file = path.resolve("src", "contact-en.html")
    res.sendFile(file)
})
// app.get("/scripts", function (req, res) {
//     let file = path.resolve("src", "scripts.js")
//     res.sendFile(file)
// })

app.listen(4000)