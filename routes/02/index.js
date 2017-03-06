const router = require('express').Router();

const exo = require('./02');

router.route('/')
    .get(exo.displayAll)

module.exports = router;