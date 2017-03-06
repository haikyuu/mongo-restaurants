const restaurant = require('../../models/restaurant')

displayAll = (req, res)=>{

	const query = restaurant.find()
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }
		
		res.json(restaurants)
	})
}

module.exports = {
	displayAll,
}