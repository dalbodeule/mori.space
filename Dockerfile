FROM node:latest
LABEL MAINTAINER="small_sunshine <jioo0224@naver.com>"

EXPOSE 80

WORKDIR /src
COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json
COPY . /src
RUN npm install
RUN npm run build

CMD ["node", "main.js"]