import express from "express"
import parcels from "../data/parcels.json"
import _ from "lodash"

const router = express.Router();
let parcelsArray = parcels;

router.get('/', (req, res) => {
    res.json(parcelsArray)
})

router.get( "/:id", (req, res) => {
    const id = req.params.id
    const parcel = _.find(parcels, parcel => parcel.id === id)

    if (parcel){
        res.json(parcel)
    }else {
        res.send("Сталаси біда. Ніц нема")
    }
})

router.post('/',(req, res) => {
    parcelsArray.push(req.body)
    res.status(200).send("Все люкс")
})

module.exports = router


