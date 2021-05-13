# Quote-App

## Running with nginx:
1) Install [Docker](https://docs.docker.com/get-docker/) for you operation system.
2) Run `npm run build` to build frontend.
4) Run `npm run dev` or `npm start` to start backend.
3) Run `docker-compose up --build` to start docker process.
5) App will be avaliable on https://localhost.

<br />

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

<br />

## Useful Commands:
### Installing dependencies:
```sh
npm i
```
### Build frontend:
```sh
npm run build
```

### Start backend (development mode):
```sh
npm run dev
```

### Start backend (production mode):
```sh
npm start
```

### Linting:
```sh
npm run lint
```

### Clean static folder:
```sh
npm run clean
```

### Start docker process:
```sh
docker-compose up --build
```
