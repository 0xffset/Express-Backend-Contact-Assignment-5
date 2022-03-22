const express = require('express');
const userControler = require('../controllers/contact.controller')
const router = express.Router();


router.route('/api/contact/')
    .get(userControler.list)
    .post(userControler.create)

module.exports = router;
