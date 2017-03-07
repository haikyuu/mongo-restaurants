const router = require('express').Router();

const exo = require('./03');

router.route('/')
    .get(exo.displayAll)

module.exports = router;