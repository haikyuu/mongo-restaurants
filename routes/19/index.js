const router = require('express').Router();

const exo = require('./19');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;