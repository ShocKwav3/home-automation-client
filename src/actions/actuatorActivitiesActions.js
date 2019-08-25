import { actuatorActivitiesActionTypes } from '../constants/actuatorActivitiesConstants'
import type {
  typeActuatorActivitiesSingle,
  typeActuatorActivities,
  typeActuatorActivitiesActions,
} from '../types/actuatorActivitiesTypes'


const {
  GET_ACTUATOR_ACTIVITIES_ALL,
  GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS,
  GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE,
  GET_ACTUATOR_ACTIVITIES_ALL_FAILURE,
  ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE,
} = actuatorActivitiesActionTypes

const getAllActuatorActivitiesPending = (): typeActuatorActivitiesActions => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL,
})

const getAllActuatorActivitiesSuccess = (allActuatorActivities: typeActuatorActivities): typeActuatorActivitiesActions => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS,
  payload: allActuatorActivities,
})

const getAllActuatorActivitiesNoNewUpdate = (): typeActuatorActivitiesActions => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE,
})

const getAllActuatorActivitiesFailure = (): typeActuatorActivitiesActions => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL_FAILURE,
})

const actuatorActivitiesRealtimeUpdate = (newData: typeActuatorActivitiesSingle): typeActuatorActivitiesActions => ({
  type: ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE,
  payload: newData,
})

const actuatorActivitiesActions: Object = {
  getAllActuatorActivitiesPending,
  getAllActuatorActivitiesSuccess,
  getAllActuatorActivitiesNoNewUpdate,
  getAllActuatorActivitiesFailure,
  actuatorActivitiesRealtimeUpdate,
}


export default actuatorActivitiesActions