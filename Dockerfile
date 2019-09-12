FROM node:latest

WORKDIR /app

COPY src /app
COPY package.json /app
COPY tsconfig.json /app

RUN npm install
RUN npm run build

ENV port=9000
ENV MONGO_URI=mongodb://localhost:27017/lns

EXPOSE 9000

CMD [ "npm","run","startup" ]