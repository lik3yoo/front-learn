var express = require('express');
var router = express.Router();
import { RequestHandler } from 'express'

/* GET users listing. */
router.get('/userInfo', function (req, res, next) {
	console.log(req)
	res.send('respond with a resource');
} as RequestHandler);

module.exports = router;
