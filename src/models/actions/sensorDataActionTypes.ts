import {
    ISensorData,
} from 'src/models/interfaces'
import {
    GET_SENSOR_DATA_ALL,
    GET_SENSOR_DATA_ALL_SUCCESS,
    GET_SENSOR_DATA_ALL_NO_NEW_UPDATE,
    GET_SENSOR_DATA_ALL_FAILURE,
    SENSOR_DATA_SINGLE_REALTIME_UPDATE,
}                            from 'src/constants/sensorDataConstants'


export interface pendingSensorDataActionType {
    type: typeof GET_SENSOR_DATA_ALL,
}

export interface successSensorDataActionType {
    type: typeof GET_SENSOR_DATA_ALL_SUCCESS,
    payload: ISensorData[],
}

export interface sensorDataNoNewUpdateActionType {
    type: typeof GET_SENSOR_DATA_ALL_NO_NEW_UPDATE,
}

export interface getSensorDataFailureActionType {
    type: typeof GET_SENSOR_DATA_ALL_FAILURE,
}

export interface sensorDataRealtimeUpdateActionType {
    type: typeof SENSOR_DATA_SINGLE_REALTIME_UPDATE,
    payload: ISensorData,
}