ARG NODE_VERSION=18.7
ARG NPM_VERSION=8.16.0

FROM node:${NODE_VERSION}-alpine AS dev

WORKDIR /app

RUN apk update && apk upgrade && apk add --update \
  g++ make

RUN npm install -g npm@${NPM_VERSION}

COPY app/package.json app/yarn.lock app/.yarnrc ./

RUN yarn install
