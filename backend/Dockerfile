FROM node:18.16.1-alpine3.17
#FROM node:19.5.0-alpine

RUN npm i -g typescript

COPY ./ /opt/backend/

ENV SERVER_PORT=8080

WORKDIR /opt/backend/

CMD tsc && npm start