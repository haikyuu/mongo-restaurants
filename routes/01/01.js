const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to display all the documents in
the collection restaurants.
*/
displayAll = (req, res)=>{

	const query = restaurant.find()
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }
		
		res.json(restaurants)
	})
}

module.exports = {
	displayAll,
}