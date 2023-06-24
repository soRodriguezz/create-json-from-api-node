FROM node:14

WORKDIR /app

RUN mkdir docs

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "src/index.js" ]
