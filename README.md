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

You need to specify to urls to the main script (`sensors-to-db`):

- the broker URI as a parameter (`--broker=XXX`) on the command line or as an enviroment variable: `SENSORS_TO_DB_BROKER`
- the mongodb full URI as a parameter (`--bb=XXX`) on the command line, or as an environment variable: `SENSORS_TO_DB_DB`

## Docker

Todo.
