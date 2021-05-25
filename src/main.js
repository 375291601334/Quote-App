const express = require('express');
const cors = require('cors');
const { pingRouter, quotesRouter } = require('./app/routes');

const app = express();
const port = process.env.APP_PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/ping', pingRouter);
app.use('/api/quotes', quotesRouter);

const server = app.listen(port, () => {
  console.log(
    `Quote app listening at http://localhost:${port} in ${process.env.NODE_ENV} mode`
  );
});

/* eslint-disable no-process-exit */
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
