const express = require('express')
const server = express()

// server.use('/static', express.static(__dirname + '/public'));
// console.log(__dirname)

// server.use(express.static(__dirname + "/../public"))



server.use("/", express.static("public"))

// server.use(express.static(path.resolve(path.join(__dirname, '..', 'public'))))

.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})

.get("/page-contato", (req, res) => {
    return res.sendFile(__dirname + "/views/page-contato.html")
})

.get("/page-empresa", (req, res) => {
    return res.sendFile(__dirname + "/views/page-empresa.html")
})

.get("/page-logar", (req, res) => {
    return res.sendFile(__dirname + "/views/page-logar.html")
})

.get("/page-veiculos", (req, res) => {
    return res.sendFile(__dirname + "/views/page-veiculos.html")
})


.listen(5500)