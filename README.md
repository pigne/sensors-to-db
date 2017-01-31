# Sensors to DB

Get data from an MQTT broker and pass it to a mongodb server. The schema used for the database is described in :

- `model/Measure.js`
- `model/Sensor.js`

Each new sensor triggers the creation of a  Sensor object. Each value creates a Measure object sent to the database.

## Prerequisite

For this to work you need :

- an MQTT broker,
- a mongodb server,
- an external process that sends mqtt events following the format defined in <https://github.com/pigne/random-sensors>.


## Launch and parameters

To launch this app, you need to install all depencies (**npm install** in the directory) ant then you can run **npm start**

But be sure to pass two variables to the script, like so :
```bash
npm install
npm start --broker=ws://localhost --db=mongo://localhost:27017/test
```
_Note: if that doesn't work for you, try passing en extra -- before the first argument. It's because you dont have the last version of nodejs_

Of, cours you should change the crendential to match yours.

If you dont like this, you can still make it work be using environment variable, like so :
```bash
SENSORS_TO_DB_BROKER=ws://localhost SENSORS_TO_DB_DB=mongo://localhost:27017/test npm start
```

## Docker

The dockerfile let you easily launch the app.
~~~bash
docker build -t sensorstodb .
docker run -e "SENSORS_TO_DB_BROKER=ws://localhost" -e "SENSORS_TO_DB_DB=mongo://localhost:27017/test" sensorstodb
~~~

Of course you can change the environment variables, but they need to be set. The mongoDB instance and the Broker need to be up as well.

We recommend the use of a docker-compose.yml file. You can use the following `docker-compose.yml` :

```yaml
version: '2'
services:
  mosca:
    image: matteocollina/mosca
    ports:
      - "8080:80"
      - "1883:1883"

  mongo:
    image: mongo

  sensorstodb:
    build: .
    environment:
      - SENSORS_TO_DB_DB=mongo
      - SENSORS_TO_DB_BROKER=mosca
    depends_on:
      - mosca
      - mongo
```
