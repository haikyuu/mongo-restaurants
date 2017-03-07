const router = require('express').Router();

const exo = require('./06');

router.route('/')
    .get(exo.displayAll)

module.exports = router;