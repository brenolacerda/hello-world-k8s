FROM node:12.18.1-alpine

WORKDIR .

COPY . .

RUN npm install

EXPOSE 3000
EXPOSE 80

CMD [ "npm", "run", "start" ]