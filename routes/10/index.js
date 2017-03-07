const router = require('express').Router();

const exo = require('./10');

router.route('/')
    .get(exo.displayAll)

module.exports = router;