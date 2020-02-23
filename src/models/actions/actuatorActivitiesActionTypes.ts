import {
    IActuatorActivity,
} from 'src/models/interfaces'
import {
    GET_ACTUATOR_ACTIVITIES_ALL,
    GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS,
    GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE,
    GET_ACTUATOR_ACTIVITIES_ALL_FAILURE,
    ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE,
}                            from 'src/constants/actuatorActivitiesConstants'


export interface pendingActuatorActivitiesActionType {
    type: typeof GET_ACTUATOR_ACTIVITIES_ALL,
}

export interface successActuatorActivitiesActionType {
    type: typeof GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS,
    payload: IActuatorActivity[],
}

export interface actuatorActivitiesNoNewUpdateActionType {
    type: typeof GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE,
}

export interface getActuatorActivitiesFailureActionType {
    type: typeof GET_ACTUATOR_ACTIVITIES_ALL_FAILURE,
}

export interface actuatorActivitiesRealtimeUpdateActionType {
    type: typeof ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE,
    payload: IActuatorActivity,
}
