const router = require('express').Router();

const exo = require('./08');

router.route('/')
    .get(exo.displayAll)

module.exports = router;