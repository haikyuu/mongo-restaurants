
module.exports = function (app) {

    app.use('/api/01', require('./01'));
    app.use('/api/02', require('./02'));
    app.use('/api/03', require('./03'));
    app.use('/api/05', require('./05'));
    app.use('/api/06', require('./06'));
    app.use('/api/07', require('./07'));
    app.use('/api/08', require('./08'));
    app.use('/api/09', require('./09'));
    app.use('/api/10', require('./10'));
    app.use('/api/11', require('./11'));
    app.use('/api/12', require('./12'));
    app.use('/api/13', require('./13'));
    app.use('/api/14', require('./14'));
    app.use('/api/15', require('./15'));
    app.use('/api/16', require('./16'));

    app.get('/', (req, res) => res.json({
        message: 'Welcome to our restaurant API!'
    }));
};