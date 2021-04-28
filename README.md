# Quote-App

## Installing dependencies:
```sh
npm i
```
## Running:
```sh
npm run build
npm run dev
```

## Production:
```sh
npm run build
npm start
```

## Environmental Variables
File `.env` contains next environmental variables:

| Variable          | Description |
|-------------------|-------------|
| APP_PORT          | define an application port on which your server will keep connection and handle requests |
| NODE_ENV          | identifies current application’s environment |
| ENV_CONFIGURATION | identifies a name of current configuration that application server must use |

<br />
<br />

### Graceful shutdown
To test graceful shutdown you can start server and then press `<Ctrl>+C`.  
You should see next messages in console:
```sh
SIGINT signal received !!!
Closing http server.
Http server closed.
```