const restaurant = require('../../models/restaurant')
/*
Write a MongoDB query to display the fields restaurant_id,
name, borough and cuisine, but exclude the field _id
for all the documents in the collection restaurant.
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