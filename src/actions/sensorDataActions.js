import { sensorDataActionTypes } from '../constants/sensorDataConstants'
import type {
  typeSensorDataSingle,
  typeSensorData,
  typeSensorDataActions,
} from '../types/sensorDataTypes'


const {
  GET_SENSOR_DATA_ALL,
  GET_SENSOR_DATA_ALL_SUCCESS,
  GET_SENSOR_DATA_ALL_NO_NEW_UPDATE,
  GET_SENSOR_DATA_ALL_FAILURE,
  SENSOR_DATA_SINGLE_REALTIME_UPDATE,
} = sensorDataActionTypes

const getAllSensorDataPending = (): typeSensorDataActions => ({
  type: GET_SENSOR_DATA_ALL,
})

const getAllSensorDataSuccess = (allSensorData: typeSensorData): typeSensorDataActions => ({
  type: GET_SENSOR_DATA_ALL_SUCCESS,
  payload: allSensorData,
})

const getAllSensorDataNoNewUpdate = (): typeSensorDataActions => ({
  type: GET_SENSOR_DATA_ALL_NO_NEW_UPDATE,
})

const getAllSensorDataFailure = (): typeSensorDataActions => ({
  type: GET_SENSOR_DATA_ALL_FAILURE,
})

const sensorDataRealtimeUpdate = (newData: typeSensorDataSingle): typeSensorDataActions => ({
  type: SENSOR_DATA_SINGLE_REALTIME_UPDATE,
  payload: newData,
})

const sensorDataActions: Object = {
  getAllSensorDataPending,
  getAllSensorDataSuccess,
  getAllSensorDataNoNewUpdate,
  getAllSensorDataFailure,
  sensorDataRealtimeUpdate,
}


export default sensorDataActions