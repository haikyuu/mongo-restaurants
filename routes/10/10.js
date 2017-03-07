const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to find the restaurants which
locate in latitude value less than -95.754168.
*/
const queryMiddleware = (req, res)=>{

	const query = restaurant.find(
		{ 'address.coord.0': { $lt: -95.754168 } }
		,{}
	)
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }
		
		res.json(restaurants)
	})
}

module.exports = {
	queryMiddleware,
}