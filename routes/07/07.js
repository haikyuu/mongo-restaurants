const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to display the next 5 restaurants
after skipping first 5 which are in the borough Bronx. 
*/
displayAll = (req, res)=>{

	const query = restaurant.find(
		{ borough: 'Bronx', }
		,{}
	)
	.skip(5)
	.limit(5)
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }
		
		res.json(restaurants)
	})
}

module.exports = {
	displayAll,
}