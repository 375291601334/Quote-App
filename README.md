# QuoteApp

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=375291601334_Quote-App)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=375291601334_Quote-App&metric=bugs)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=375291601334_Quote-App&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=375291601334_Quote-App&metric=code_smells)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)

[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=375291601334_Quote-App&metric=sqale_index)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=375291601334_Quote-App&metric=coverage)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=375291601334_Quote-App&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=375291601334_Quote-App&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=375291601334_Quote-App&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=375291601334_Quote-App&metric=security_rating)](https://sonarcloud.io/dashboard?id=375291601334_Quote-App)

## Running with docker:
1) Install [Docker](https://docs.docker.com/get-docker/) for you operation system.
2) Run `docker-compose up --build` to start docker process.
3) App will be avaliable on https://localhost.

<br />

## Environmental Variables

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
