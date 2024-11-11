FROM node:23-bookworm

WORKDIR /usr/app

COPY . .

RUN yarn install

RUN yarn build

