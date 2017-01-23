let mqtt = require('mqtt')

var log4js = require('log4js')
var logger = log4js.getLogger('runtimeLogger')


let config = require('./config');
require('./mongodb');

let Sensor = require("./model/Sensor");
let Measure = require("./model/Measure");

let sensors = []
let client = mqtt.connect(config.broker);

client.on('connect', () => {
  client.subscribe('value/#')
  client.subscribe('presence')
})
client.on('message', (topic, message) => {
  let id;
  if(topic == "presence") {
    id = message;
  } else {
    id = topic.substring(6)
  }
  logger.debug(id, message.toString())
});
