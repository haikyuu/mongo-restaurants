const router = require('express').Router();

const exo = require('./12');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;