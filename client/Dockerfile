FROM node:12.10.0-alpine

WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm install --no-optional

COPY . .


CMD ["npm","start"]