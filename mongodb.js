var config      =   require('./config');
var mongoose    =   require("mongoose");
var connection = mongoose.connect(config.db);

var log4js = require('log4js')
var logger = log4js.getLogger('dbLogger')


// When successfully connected
mongoose.connection.on('connected', function () {
  logger.info('Connected to database at ' + config.db);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  logger.error('Database connection error: ',  err);
  process.exit(0);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  logger.warn('Database connection lost');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    logger.info('Disconnected from database through app termination');
    process.exit(0);
  });
});
