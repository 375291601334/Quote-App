const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const usersService = require('./app/services/users')
const { pingRouter, quotesRouter, authRouter } = require('./app/routes');

const app = express();
const port = process.env.APP_PORT || 8080;

app.use(cors({
  origin: ['http://quote-app-front.s3-website.us-east-2.amazonaws.com/', 'http://localhost:4200'],
  optionsSuccessStatus: 200,
}));

app.use(cookieParser());

app.use(express.json());

passport.use(new BasicStrategy(
  function (username, password, done) {
    const user = usersService.findUserByName(username);

    if (user && user.password === password) {
      return done(null, user);
    }

    return done(null);
  }
));

app.use(passport.initialize());

app.use('/ping', pingRouter);
app.use('/api/quotes', quotesRouter);
app.use('/api', authRouter);

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
