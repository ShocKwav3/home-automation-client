import { sensorDataActionTypes } from '../constants/sensorDataConstants'


const {
  GET_SENSOR_DATA_ALL,
  GET_SENSOR_DATA_ALL_SUCCESS,
  GET_SENSOR_DATA_ALL_NO_NEW_UPDATE,
  GET_SENSOR_DATA_ALL_FAILURE,
  SENSOR_DATA_SINGLE_REALTIME_UPDATE,
} = sensorDataActionTypes

const getAllSensorDataPending = () => ({
  type: GET_SENSOR_DATA_ALL,
})

const getAllSensorDataSuccess = (allSensorData) => ({
  type: GET_SENSOR_DATA_ALL_SUCCESS,
  payload: allSensorData,
})

const getAllSensorDataNoNewUpdate = () => ({
  type: GET_SENSOR_DATA_ALL_NO_NEW_UPDATE,
})

const getAllSensorDataFailure = () => ({
  type: GET_SENSOR_DATA_ALL_FAILURE,
})

const sensorDataRealtimeUpdate = (newData) => ({
  type: SENSOR_DATA_SINGLE_REALTIME_UPDATE,
  payload: newData,
})

const sensorDataActions = {
  getAllSensorDataPending,
  getAllSensorDataSuccess,
  getAllSensorDataNoNewUpdate,
  getAllSensorDataFailure,
  sensorDataRealtimeUpdate,
}


export default sensorDataActions