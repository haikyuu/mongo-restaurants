const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to display the first
5 restaurant which is in the borough Bronx. 
*/
const queryMiddleware = (req, res)=>{

	const query = restaurant.find(
		{ borough: 'Bronx', }
		,{}
		,{ limit: 5 }
	)
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }
		
		res.json(restaurants)
	})
}

module.exports = {
	queryMiddleware,
}