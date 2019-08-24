import devices from './devices'
import sensorData from './sensorData'
import actuatorActivities from './actuatorActivities'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  devices,
  sensorData,
  actuatorActivities,
})


export default rootReducer