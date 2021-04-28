const express = require('express');
const routes = require('./app/quotesRouter');

const app = express();
const port = process.env.APP_PORT || 8080;

app.use(express.static('./static'));

app.use(express.json());

app.use('/api/quotes', routes);

app.get('/ping', ( req, res) => {
  res.json({ statusCode: 200, message: 'OK', time: process.uptime() });
});

app.listen(port, () => {
  console.log(
    `Quote app listening at http://localhost:${port} in ${process.env.NODE_ENV} mode`
  );
});
