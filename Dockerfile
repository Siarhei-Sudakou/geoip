FROM node:7.9.0-alpine

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install --production --no-progress

COPY ./build .

EXPOSE 3000

CMD [ "node", "server.js" ]
