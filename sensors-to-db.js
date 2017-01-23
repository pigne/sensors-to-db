let mqtt = require('mqtt')

var log4js = require('log4js')
var logger = log4js.getLogger('runtimeLogger')


let config = require('./config');
require('./mongodb');

let Sensor = require("./model/Sensor");
let Measure = require("./model/Measure");

let sensors = {}
let client = mqtt.connect(config.broker);

client.on('connect', () => {
  client.subscribe('value/#')
})
client.on('message', (topic, payload) => {
  payload = JSON.parse(payload)
  const id = topic.substring(6)
  const type = payload.type
  const value =  payload.value

  if(typeof sensors[id] === 'undefined') {
    const sensor = new Sensor();
    sensor.setValue('_id', id);
    sensor.setValue('type', type);
    sensors[id] = sensor;
    logger.debug("new sensor", sensor)
    sensor.save();
  }
  const measure = new  Measure();
  measure.setValue('sensor_id', id);
  measure.setValue('date', new Date());
  measure.setValue('value', value);
  measure.save();

  logger.debug(id, type, value, payload)
});
