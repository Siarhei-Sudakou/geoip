FROM node:7.9.0-alpine

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install --production --no-progress

COPY ./dist .

CMD [ "node", "index.js" ]
