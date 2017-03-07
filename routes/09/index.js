const router = require('express').Router();

const exo = require('./09');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;