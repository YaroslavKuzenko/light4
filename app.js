import express from "express"

const PORT = 3000
const server = express()

console.log("Pes Patronchuk")

const message = "Hello Babelsdfgf"

console.log(message)

server.listen(PORT, () =>{
    console.log(`То є сила капітальна на порту ${PORT}`)
})

server.get('/', (req, res) => {
    res.send("Pryvit")
})