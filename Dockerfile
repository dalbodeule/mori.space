FROM node:latest

EXPOSE 80

COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json
RUN cd /src; npm install
RUN npm audit fix
RUN npm run build
COPY . /src
WORKDIR /src

CMD ["node", "main.js"]