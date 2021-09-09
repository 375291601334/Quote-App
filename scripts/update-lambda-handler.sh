currentDirectory=$( cd $(dirname "${0}") && pwd)
lambdaDirectory=${currentDirectory%scripts}/src/app/notifications/handlers

ZIP_FILE_PATH=${currentDirectory}/lambda.zip

if [[ -f $ZIP_FILE_PATH ]]; then
  rm $ZIP_FILE_PATH
fi

zip -j $ZIP_FILE_PATH ${lambdaDirectory}/quote-notifications.js

echo $ZIP_FILE_PATH

aws lambda update-function-code \
  --function-name share \
  --zip-file fileb://$(dirname "${0}")/lambda.zip

if [[ -f $ZIP_FILE_PATH ]]; then
  rm $ZIP_FILE_PATH
fi
