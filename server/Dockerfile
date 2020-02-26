FROM node:12.10.0-alpine


WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm install 

COPY . .

EXPOSE 8001

CMD ["npm", "run","start"]