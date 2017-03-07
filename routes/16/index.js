const router = require('express').Router();

const exo = require('./16');

router.route('/')
    .get(exo.queryMiddleware)

module.exports = router;