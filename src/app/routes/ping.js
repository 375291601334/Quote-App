const { Router } = require('express');

const router = new Router();

router.get('/', ( req, res) => {
  res.json({
    statusCode: 200,
    message: 'OK',
    time: new Date().toISOString(),
  });
});

module.exports = router;
