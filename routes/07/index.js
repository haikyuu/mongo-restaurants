const router = require('express').Router();

const exo = require('./07');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;