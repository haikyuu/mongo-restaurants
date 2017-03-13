const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to find the restaurants which 
belong to the borough Bronx and prepared either 
American or Chinese dish.  
*/
const queryMiddleware = (req, res)=>{

	const query = restaurant.find(
		{ 
			borough: `Bronx`
			,$or:[{ cuisine: 'American'}, {cuisine: 'Chinese'}]
		}
	)
	query.exec((err, restaurants)=>{
		if (err) { res.send(err) }

		res.json(restaurants)
	})
}

module.exports = {
	queryMiddleware,
}