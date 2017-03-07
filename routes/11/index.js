const router = require('express').Router();

const exo = require('./11');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;