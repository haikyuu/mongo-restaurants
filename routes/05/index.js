const router = require('express').Router();

const exo = require('./05');

router.route('/')
    .get(exo.displayAll)

module.exports = router;