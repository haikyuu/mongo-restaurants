const restaurant = require('../../models/restaurant')
    /*
    Write a MongoDB query to find the restaurant Id, name, 
    borough and cuisine for those restaurants which are not 
    belonging to the borough Staten Island or Queens or Bronxor Brooklyn. 
    */
const queryMiddleware = (req, res) => {

    const query = restaurant.find({
        borough:{
            $nin: ['Staten Island', 'Queens', 'Bronxor Brooklyn'] 
        }
    }, {
        _id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    })
    query.exec((err, restaurants) => {
        if (err) {
            res.send(err)
        }

        res.json(restaurants)
    })
}

module.exports = {
    queryMiddleware,
}