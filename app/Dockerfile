ARG NODE_VERSION=18.7
ARG NPM_VERSION=8.16.0

# Dev
# ------------------------------------------------------------------------------
FROM node:${NODE_VERSION}-alpine as app-dev

WORKDIR /app

RUN apk update && apk upgrade && apk add --update \
  g++ make

RUN npm install -g npm@${NPM_VERSION}

# COPY package.json .yarnrc yarn.lock ./

# RUN yarn install --modules-folder /node_modules &> /dev/null


# Build
# ------------------------------------------------------------------------------
FROM app-dev as app-build

COPY . .

RUN yarn build
