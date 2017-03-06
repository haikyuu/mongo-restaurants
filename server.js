const express = require('express')
const mongoose = require('mongoose');
const path = require('path')


const routes = require('./routes')


const app = express()


const options = {
    // server: {
    //     socketOptions: {
    //         keepAlive: 1,
    //         connectTimeoutMS: 3000
    //     }
    // },
    // replset: {
    //     socketOptions: {
    //         keepAlive: 1,
    //         connectTimeoutMS: 3000
    //     }
    // }
};

// DB connection
// const mongoURI = process.env.DBHost || config.DBHost;
const mongoURI = 'mongodb://localhost/test'
mongoose.connect(mongoURI, options);

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'DB connection error: '));



routes(app)

app.use('/', (req, res)=>{
	res.send(`hello, check /api plz`)
})

const port = 3000
app.listen(port, ()=>{
	console.log(`Server listening in port: ${port}`);
	console.log(`visit http://localhost:${port}`);
})