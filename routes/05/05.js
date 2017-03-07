const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to display all the restaurants
 which are in the borough Bronx.
*/
displayAll = (req, res)=>{

	const query = restaurant.find(
		{ borough: 'Bronx', }
	)
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }
		
		res.json(restaurants)
	})
}

module.exports = {
	displayAll,
}