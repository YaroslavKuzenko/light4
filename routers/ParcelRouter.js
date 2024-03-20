import express from "express"
import parcels from "../data/parcels.json"
import _ from "lodash"

const router = express.Router();

router.get('/', (req, res) => {
    res.json(parcels)
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

module.exports = router


