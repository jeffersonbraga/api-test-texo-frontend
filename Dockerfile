FROM node:14.15-alpine as angular

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g webpack webpack-cli
RUN npm link webpack
RUN npm run build

FROM httpd:alpine3.15

WORKDIR /usr/local/apache2/htdocs
COPY --from=angular app/dist/api-test-texo-frontend .
