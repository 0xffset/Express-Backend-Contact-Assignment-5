const express = require('express');
const contactController = require('../controllers/contact.controller')
const router = express.Router();


router.route('/api/contact/')
    .get(contactController.list)
    .post(contactController.create)

module.exports = router;