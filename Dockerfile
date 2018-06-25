FROM node:latest
LABEL MAINTAINER="small_sunshine <jioo0224@naver.com>"

EXPOSE 80

WORKDIR /src
COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json
RUN npm install
RUN npm audit fix
RUN npm run build
COPY . /src
WORKDIR /src

CMD ["node", "main.js"]