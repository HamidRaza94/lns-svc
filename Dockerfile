FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

CMD [ "yarn","startup" ]