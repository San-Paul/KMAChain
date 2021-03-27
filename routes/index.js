var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('Get')
});

router.post('/', (req, res) => {
  res.send('Post')
});

module.exports = router;