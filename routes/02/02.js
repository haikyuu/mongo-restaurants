const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to display the fields restaurant_id, name, borough
and cuisine for all the documents in the collection restaurant.
*/
const queryMiddleware = (req, res)=>{

	const query = restaurant.find(
		{}
		,{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
	)
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }
		
		res.json(restaurants)
	})
}

module.exports = {
	queryMiddleware,
}