var mongoose    =   require("mongoose");

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var measureSchema  = new mongoSchema (
  {
    "sensor_id": {
        "type": String
    },
    "date": {
        "type": Date
    },
    "type": {
        "type": String
    },
    "value": String
  },
  {'timestamps' : false}
);

// create model if not exists.
module.exports = mongoose.model('Measure',measureSchema, "measures");
