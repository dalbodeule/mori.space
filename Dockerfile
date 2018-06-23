FROM node:latest

EXPOSE 80

COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json
RUN cd /src; npm install
COPY . /src
WORKDIR /src

CMD ["node", "main.js"]