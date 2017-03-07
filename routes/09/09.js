const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to find the restaurants that
achieved a score, more than 80 but less than 100.
*/
displayAll = (req, res)=>{

	const query = restaurant.find(
		{ 'grades.score': { $gt: 80, $lt: 100 }, }
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