const router = require('express').Router();

const exo = require('./15');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;