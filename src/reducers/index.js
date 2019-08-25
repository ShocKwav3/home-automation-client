import { combineReducers } from 'redux'

import type {
  State,
  Action,
  Dispatch,
} from '../types'

//import devices from './devices'
import sensorData from './sensorData'
import actuatorActivities from './actuatorActivities'


export default combineReducers<Object, Action>({
  sensorData,
  actuatorActivities,
})