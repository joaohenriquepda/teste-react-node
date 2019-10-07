ARG NODE_VERSION=12.9
FROM node:$NODE_VERSION

# add more arguments from CI to the image so that `$ env` should reveal more info

ARG CI_BUILD_ID
ARG CI_BUILD_REF
ARG CI_REGISTRY_IMAGE
ARG CI_BUILD_TIME
ARG NG_CLI_VERSION=latest

ENV CI_BUILD_ID=$CI_BUILD_ID CI_BUILD_REF=$CI_BUILD_REF CI_REGISTRY_IMAGE=$CI_REGISTRY_IMAGE \
    CI_BUILD_TIME=$CI_BUILD_TIME \
    NG_CLI_VERSION=$NG_CLI_VERSION


RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm i -g @adonisjs/cli
EXPOSE 3333
RUN npm install -g create-react-app
