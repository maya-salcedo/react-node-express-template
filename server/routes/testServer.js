var express = require('express');

var router = express.Router();

router.get('/', async (req, res, next) => {
  res.send('API is working properly. I am from server!');
});

module.exports = router;
