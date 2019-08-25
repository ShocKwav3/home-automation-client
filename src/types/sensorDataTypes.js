import { sensorDataActionTypes } from '../constants/sensorDataConstants'


const {
  GET_SENSOR_DATA_ALL,
  GET_SENSOR_DATA_ALL_SUCCESS,
  GET_SENSOR_DATA_ALL_NO_NEW_UPDATE,
  GET_SENSOR_DATA_ALL_FAILURE,
  SENSOR_DATA_SINGLE_REALTIME_UPDATE,
} = sensorDataActionTypes

type created_timestamp = string
type sensor_value = number
type sensor_device_id = number

export type typeSensorDataSingle = {
  +created_timestamp: created_timestamp,
  +sensor_value: sensor_value,
  +sensor_device_id: sensor_device_id,
}

export type typeSensorData = Array<typeSensorDataSingle>

export type typeSensorDataState = {
  +sensorData: typeSensorData,
}

export type typeSensorDataActions =
  | { type: GET_SENSOR_DATA_ALL }
  | { type: GET_SENSOR_DATA_ALL_SUCCESS, +payload: typeSensorData }
  | { type: GET_SENSOR_DATA_ALL_NO_NEW_UPDATE }
  | { type: GET_SENSOR_DATA_ALL_FAILURE }
  | { type: SENSOR_DATA_SINGLE_REALTIME_UPDATE, +payload: typeSensorDataSingle }