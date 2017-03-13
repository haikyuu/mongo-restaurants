const router = require('express').Router();

const exo = require('./20');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;