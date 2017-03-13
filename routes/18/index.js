const router = require('express').Router();

const exo = require('./18');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;