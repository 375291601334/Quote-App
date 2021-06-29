currentDirectory=$( cd $(dirname "${0}") && pwd)
mainDirectory=${currentDirectory%scripts}

date=$(date +'%d.%m.%Y_%H-%M-%S')
tag=build_from_${date}

(cd ${mainDirectory} && docker-compose up --build --no-start backend)
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 072203977998.dkr.ecr.us-east-2.amazonaws.com
docker tag quote-app_backend 072203977998.dkr.ecr.us-east-2.amazonaws.com/quote-app-backend:${tag}
docker push 072203977998.dkr.ecr.us-east-2.amazonaws.com/quote-app-backend:${tag}
docker tag quote-app_backend 072203977998.dkr.ecr.us-east-2.amazonaws.com/quote-app-backend:latest
docker push 072203977998.dkr.ecr.us-east-2.amazonaws.com/quote-app-backend:latest
