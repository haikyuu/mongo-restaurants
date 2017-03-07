const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to find the restaurants who
achieved a score more than 90.
*/
displayAll = (req, res)=>{

	const query = restaurant.find(
		{ borough: 'Bronx', 'grades.score': { $gt: 90 }, }
		,{}
	)
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }
		
		res.json(restaurants)
	})
}

module.exports = {
	displayAll,
}