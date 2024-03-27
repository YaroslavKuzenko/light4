import express from "express"
import parcels from "./data/parcels.json"
import _ from "lodash"
import ParcelRouter from "./routers/ParcelRouter"
import morgan from "morgan";
import bodyParser from  "body-parser";

const PORT = 3000
const server = express()
const BASE_PARCELS_URL = '/api/v1/parcels'
server.use(morgan('tiny'))
server.use(bodyParser.json())
server.use(BASE_PARCELS_URL, ParcelRouter)



server.listen(PORT, () =>{
    console.log(`То є сила капітальна на порту ${PORT}`)
})

server.get('/', (req, res) => {
    res.send("Pryvit")
})

