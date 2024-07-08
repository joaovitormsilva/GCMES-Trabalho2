FROM node:22-slim

ARG _WORKDIR=/home/node/app

WORKDIR ${_WORKDIR}

COPY package*.json .

RUN npm cache clean --force

ENV PM2_DISABLE_TTY=true

RUN apt update && \
npm install

COPY . .

RUN npm run build && \
npm prune --production

RUN npm install pm2 -g

USER node

CMD ["pm2-runtime", "start", "processes.json", "--only", "guaradata-frontend"]
