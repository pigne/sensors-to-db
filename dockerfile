FROM node:6.9
MAINTAINER MERLIN

RUN useradd -m sensorsToDB -d /home/sensorsToDB

VOLUME /home/sensorsToDB
WORKDIR /home/sensorsToDB

CMD ["sh","-c","npm install --reinstall; npm start"]
