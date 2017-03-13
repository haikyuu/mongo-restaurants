const router = require('express').Router();

const exo = require('./17');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;