var express = require('express');
var router = express.Router();
import { RequestHandler } from 'express'

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
} as RequestHandler);

module.exports = router;
