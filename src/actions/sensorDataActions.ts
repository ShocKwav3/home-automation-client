import {
    GET_SENSOR_DATA_ALL,
    GET_SENSOR_DATA_ALL_SUCCESS,
    GET_SENSOR_DATA_ALL_NO_NEW_UPDATE,
    GET_SENSOR_DATA_ALL_FAILURE,
    SENSOR_DATA_SINGLE_REALTIME_UPDATE,
} from 'src/constants/sensorDataConstants'
import {
    pendingSensorDataActionType,
    successSensorDataActionType,
    sensorDataNoNewUpdateActionType,
    getSensorDataFailureActionType,
    sensorDataRealtimeUpdateActionType,
} from 'src/models/actions/sensorDataActionTypes'
import {
    ISensorData,
} from 'src/models/interfaces'


export const getAllSensorDataPending: pendingSensorDataActionType = {
  type: GET_SENSOR_DATA_ALL,
}

export const getAllSensorDataSuccess = (allSensorData: ISensorData[]): successSensorDataActionType => ({
  type: GET_SENSOR_DATA_ALL_SUCCESS,
  payload: allSensorData,
})

export const getAllSensorDataNoNewUpdate = (): sensorDataNoNewUpdateActionType => ({
  type: GET_SENSOR_DATA_ALL_NO_NEW_UPDATE,
})

export const getAllSensorDataFailure = (): getSensorDataFailureActionType => ({
  type: GET_SENSOR_DATA_ALL_FAILURE,
})

export const sensorDataRealtimeUpdate = (newData: ISensorData): sensorDataRealtimeUpdateActionType  => ({
  type: SENSOR_DATA_SINGLE_REALTIME_UPDATE,
  payload: newData,
})
