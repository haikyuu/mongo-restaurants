const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to find the restaurants that do
not prepare any cuisine of 'American' and their grade
score more than 70 and latitude less than -65.754168.
*/
const queryMiddleware = (req, res)=>{

	const query = restaurant.find(
		{
		cuisine: { $ne: 'American' }
		,'grades.score': { $gt: 70}
		,'address.coord.0': { $lt: -65.754168}
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