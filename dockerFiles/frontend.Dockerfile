FROM node:16-alpine as builder
WORKDIR /quoteAppFrontend
COPY --chown=node:node ../client/package*.json ./
RUN npm ci --only=production
COPY --chown=node:node ../client ./
RUN npm run build -- --configuration=${ENV_CONFIGURATION}

FROM nginx
COPY --from=builder /quoteAppFrontend/dist /var/www/quote-app.local
RUN rm /etc/nginx/conf.d/default.conf
COPY ../nginx.conf /etc/nginx/conf.d/quote-app.local.conf
COPY ../certs /etc/ssl/certs
