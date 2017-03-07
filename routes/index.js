
module.exports = function (app) {

    app.use('/api/01', require('./01'));
    app.use('/api/02', require('./02'));
    app.use('/api/03', require('./03'));

    app.get('/', (req, res) => res.json({
        message: 'Welcome to our restaurant API!'
    }));
};