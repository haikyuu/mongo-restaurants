const router = require('express').Router();

const exo = require('./14');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;