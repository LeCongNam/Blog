const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;
