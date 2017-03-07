const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to find the restaurants which 
do not prepare any cuisine of 'American ' and achieved 
a grade point 'A' not belongs to the borough Brooklyn. 
The document must be displayed according to the cuisine 
in descending order.
*/
const queryMiddleware = (req, res)=>{

	const query = restaurant.find(
		{
		cuisine: { $ne: 'American' }
		,'grades.grade': 'A'
		,'address.coord.1': { $gte: -65.754168}
		,'borough': { $ne: 'Brooklyn'}
		}

		,{}
	)
	.sort({ cuisine: 1 })
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }
		
		res.json(restaurants)
	})
}

module.exports = {
	queryMiddleware,
}