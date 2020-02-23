import {
    ISensorData,
} from 'src/models/interfaces'
import {
    pendingSensorDataActionType,
    successSensorDataActionType,
    sensorDataNoNewUpdateActionType,
    getSensorDataFailureActionType,
    sensorDataRealtimeUpdateActionType,
} from 'src/models/actions/sensorDataActionTypes'


export type TsensorDataStateType = ISensorData[]

export type TsensorDataActionTypes = pendingSensorDataActionType
                                     | successSensorDataActionType
                                     | sensorDataNoNewUpdateActionType
                                     | getSensorDataFailureActionType
                                     | sensorDataRealtimeUpdateActionType