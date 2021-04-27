const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('./static'));

app.get('/ping', ( req, res) => {
  res.json({ statusCode: 200, message: 'OK', time: process.uptime() });
});

app.listen(port, () => {
  console.log(`Quote app listening at http://localhost:${port}`)
});
