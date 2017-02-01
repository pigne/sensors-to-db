var mongoose    =   require("mongoose");

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var sensorSchema  = new mongoSchema (
  {
    "_id": {
        "type": String
    },
    "name": {
        "type": String
    },
    "location": {
        "type": String
    },
    "type": {
        "type": String
    },
  },
  {'timestamps' : true}
);

// create model if not exists.
module.exports = mongoose.model('Sensor',sensorSchema, "sensors");
