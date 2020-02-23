import { 
    GET_ACTUATOR_ACTIVITIES_ALL,
    GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS,
    GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE,
    GET_ACTUATOR_ACTIVITIES_ALL_FAILURE,
    ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE,
 } from 'src/constants/actuatorActivitiesConstants'
import {
    pendingActuatorActivitiesActionType,
    successActuatorActivitiesActionType,
    actuatorActivitiesNoNewUpdateActionType,
    getActuatorActivitiesFailureActionType,
    actuatorActivitiesRealtimeUpdateActionType,
} from 'src/models/actions/actuatorActivitiesActionTypes'
import {
    IActuatorActivity,
} from 'src/models/interfaces'


export const getAllActuatorActivitiesPending = (): pendingActuatorActivitiesActionType => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL,
})

export const getAllActuatorActivitiesSuccess = (allActuatorActivities: IActuatorActivity[]): successActuatorActivitiesActionType => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS,
  payload: allActuatorActivities,
})

export const getAllActuatorActivitiesNoNewUpdate = (): actuatorActivitiesNoNewUpdateActionType => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE,
})

export const getAllActuatorActivitiesFailure = (): getActuatorActivitiesFailureActionType => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL_FAILURE,
})

export const actuatorActivitiesRealtimeUpdate = (newData: IActuatorActivity): actuatorActivitiesRealtimeUpdateActionType => ({
  type: ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE,
  payload: newData,
})