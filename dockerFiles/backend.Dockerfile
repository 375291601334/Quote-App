FROM node:16-alpine
RUN apk add --no-cache dumb-init
WORKDIR /quoteAppBackend
COPY --chown=node:node ../package*.json ./
RUN npm ci --only=production
COPY --chown=node:node ../src ./src
USER node
CMD ["dumb-init", "node", "./src/main.js"]
