FROM node:12.18.1

WORKDIR .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]