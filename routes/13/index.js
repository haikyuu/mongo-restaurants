const router = require('express').Router();

const exo = require('./13');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;