// config.js
// configuration parameters for the application
// Configure the API broker
var argv=   require('minimist')(process.argv.slice(2));


var log4js 	= require('log4js')
var logger 	= log4js.getLogger('configLogger')


// Configure the MQTT broker
var broker = 'mqtt://localhost';
if(argv.broker !== undefined)
	broker = argv.broker;
else {
  if(typeof process.env.SENSORS_TO_DB_BROKER !== 'undefined'){
    broker = process.env.SENSORS_TO_DB_BROKER;
  }
  else {
	 logger.warn('No --broker=xxx specified in command line, nor "SENSORS_TO_DB_BROKER" env variable given. Using default hostname "localhost".')
	}
}


// Configure the database url
var db = 'mongodb://localhost:27017/InternetOfStuff';
if(argv.db !== undefined)
	db = argv.db;
else
  if(typeof process.env.SENSORS_TO_DB_DB !== 'undefined'){
    db = process.env.SENSORS_TO_DB_DB;
  }
  else
	 logger.warn('No --db=xxx specified in command line, nor "SENSORS_TO_DB_DB" env variable given. Using default ("localhost") url and credentials.')


// exposed parameters
module.exports = {
  broker: broker,
  db: db
};
