const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to find the restaurant Id, 
name, borough and cuisine for those restaurants 
which contain 'Wil' as first three letters for its name. 
*/
const queryMiddleware = (req, res)=>{

	const query = restaurant.find(
		{ name: { $regex: /^Wil/} }

		,{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
	)
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }

		res.json(restaurants)
	})
}

module.exports = {
	queryMiddleware,
}