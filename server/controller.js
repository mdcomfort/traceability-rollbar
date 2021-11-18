
const houses = require('./db.json')
const upcomingHouseID = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let houseIndex = houses.findIndex((house) => house.id == req.params.id)
        houses.splice(houseIndex, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let newHouse = {
            id: upcomingHouseID,
            address: req.body.address,
            price: req.body.price,
            imageURL: req.body.imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        upcomingHouseID++
    },
    updateHouse: (req, res) => {
        let requestID = req.params.id
        let houseIndex = houses.findIndex((house) => house.id == requestID)
        if (req.body.type === "plus") {
            houses[houseIndex].price += 10000
        } else if (req.body.type === "minus") {
            houses[houseIndex].price -= 10000
        }
        res.status(200).send(houses)
    }
 }