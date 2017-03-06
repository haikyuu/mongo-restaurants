
module.exports = function (app) {

    app.use('/api/01', require('./01'));

    app.get('/', (req, res) => res.json({
        message: 'Welcome to our restaurant API!'
    }));
};