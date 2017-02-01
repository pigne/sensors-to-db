FROM node:7

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN chmod +x ./node_modules/.bin/babel

RUN npm run compile

CMD [ "node", "dist/sensors-to-db.js" ]