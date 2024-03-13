import express from "express"
import parcels from "./data/parcels.json"
import _ from "lodash"

const PORT = 3000
const server = express()
const BASE_PARCELS_URL = '/api/v1/parcels'

console.log("Pes Patronchuk")

const message = "Hello Babelsdfgf"

console.log(message)

server.listen(PORT, () =>{
    console.log(`То є сила капітальна на порту ${PORT}`)
})

server.get('/', (req, res) => {
    res.send("Pryvit")
})

server.get(BASE_PARCELS_URL, (req, res) => {
    res.json(parcels)
})

server.get(BASE_PARCELS_URL + "/:id", (req, res) => {
    const id = req.params.id
    const parcel = _.find(parcels, parcel => parcel.id === id)

    if (parcel){
        res.json(parcel)
    }else {
        res.send("Сталаси біда. Ніц нема")
    }
})