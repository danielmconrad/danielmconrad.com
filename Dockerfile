ARG NODE_VERSION=18.2

# Dev
# ------------------------------------------------------------------------------
FROM node:${NODE_VERSION}-alpine as web-dev

WORKDIR /web

ENV PATH="/node_modules/.bin:${PATH}"
ENV NPM_CONFIG_PREFIX="/node_modules"

RUN apk update && apk upgrade && apk add --update \
  g++ make

COPY web/package.json web/.yarnrc web/yarn.lock ./

RUN yarn install &> /dev/null


# Build
# ------------------------------------------------------------------------------
FROM web-dev as web-build

COPY . .

RUN yarn build
