FROM node:7.9.0-alpine

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install --production --no-progress

COPY ./build .

CMD [ "node", "server.js" ]
