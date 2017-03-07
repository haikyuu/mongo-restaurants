const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to find the restaurants which
do not prepare any cuisine of 'American' and achieved
a score more than 70 and not located in the longitude
less than -65.754168.
Note : Do this query without using $and operator. 
*/
const queryMiddleware = (req, res)=>{

	const query = restaurant.find(
		{
		cuisine: { $ne: 'American' }
		,'grades.score': { $gt: 70}
		,'address.coord.1': { $gte: -65.754168}
		}
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