FROM node:14
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN npm i -g serve
COPY package.json /home/node/app
WORKDIR /home/node/app
USER node
RUN npm i
COPY --chown=node:node . .



COPY . /home/node/app

RUN npm run-script build


EXPOSE 5000

CMD ["serve", "-s", "build"]
