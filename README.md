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


## parameters

You need to specify two urls to the main script (`sensors-to-db`):

- the broker URI as a parameter (`-- --broker=XXX`) on the command line or as an enviroment variable: `SENSORS_TO_DB_BROKER`
- the mongodb full URI as a parameter (`-- --db=XXX`) on the command line, or as an environment variable: `SENSORS_TO_DB_DB`

The first -- is needed because of how babel handle parameters.

## Docker

The dockerfile let you easily launch the app.
~~~bash
docker build -t sensorToDB .
docker run -e "SENSORS_TO_DB_BROKER=ws://localhost" -e "SENSORS_TO_DB_DB=mongo://localhost:27017/test" sensorToDB
~~~

Of course you can change the environment variable, but they need to be set. The mongoDB instance and the Broker need to be up as well.

We recommend the use of a docker-compose.yml file.
