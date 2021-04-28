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

const server = app.listen(port, () => {
  console.log(
    `Quote app listening at http://localhost:${port} in ${process.env.NODE_ENV} mode`
  );
});

const sigs = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
sigs.forEach(sig => {
  process.on(sig, () => {
    console.info(`${sig} signal received !!!`);
    console.log('Closing http server.');
    server.close((err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log('Http server closed.');
      process.exit(0);
    });
  });
});
