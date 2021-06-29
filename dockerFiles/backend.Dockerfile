FROM "072203977998.dkr.ecr.us-east-2.amazonaws.com/base-images:node-16.3.0-alpine"
RUN apk add --no-cache dumb-init
WORKDIR /quoteAppBackend
COPY --chown=node:node ./package*.json ./
RUN npm ci --only=production
COPY --chown=node:node ./src/ ./
USER node
CMD ["dumb-init", "node", "./main.js"]
