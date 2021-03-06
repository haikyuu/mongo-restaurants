const restaurant = require('../../models/restaurant')
    /*
    Write a MongoDB query to find the restaurant Id, 
    name, borough and cuisine for those restaurants 
    which achieved a score which is not more than 10.  
    */
const queryMiddleware = (req, res) => {

    const query = restaurant.find({
        'grades.score': { $lte: 10 }
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