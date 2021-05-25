#!/bin/bash

currentDirectory=$( cd $(dirname "${0}") && pwd)
mainDirectory=${currentDirectory%scripts}
clientDirectory=${mainDirectory}/client

CLIENT_CONFIG=0
if [ -f ${mainDirectory}/.env ]; then
  set -a
  source ${mainDirectory}/.env
  set +a

  if [[ ! -z $ENV_CONFIGURATION && $ENV_CONFIGURATION = @(production|test) ]]; then
    CLIENT_CONFIG=$ENV_CONFIGURATION
  fi
fi

if [[ ! -d ${clientDirectory}/dist ]]; then
  mkdir -p ${clientDirectory}/dist
fi

if [[ -f ${mainDirectory}/static/client-app.zip ]]; then
  rm ${mainDirectory}/statis/client-app.zip
fi

if [[ $CLIENT_CONFIG = 0 ]]; then
  npm --prefix ${clientDirectory} run build
else
  npm --prefix ${clientDirectory} run build -- --configuration=${CLIENT_CONFIG}
fi

zip -r ${mainDirectory}/static/client-app.zip ${clientDirectory}/dist
