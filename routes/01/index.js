const router = require('express').Router();

const exo = require('./01');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;