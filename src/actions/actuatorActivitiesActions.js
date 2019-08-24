import { actuatorActivitiesActionTypes } from '../constants/actuatorActivitiesConstants'


const {
  GET_ACTUATOR_ACTIVITIES_ALL,
  GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS,
  GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE,
  GET_ACTUATOR_ACTIVITIES_ALL_FAILURE,
  ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE,
} = actuatorActivitiesActionTypes

const getAllActuatorActivitiesPending = () => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL,
})

const getAllActuatorActivitiesSuccess = (allActuatorActivities) => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS,
  payload: allActuatorActivities,
})

const getAllActuatorActivitiesNoNewUpdate = () => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE,
})

const getAllActuatorActivitiesFailure = () => ({
  type: GET_ACTUATOR_ACTIVITIES_ALL_FAILURE,
})

const actuatorActivitiesRealtimeUpdate = (newData) => ({
  type: ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE,
  payload: newData,
})

const actuatorActivitiesActions = {
  getAllActuatorActivitiesPending,
  getAllActuatorActivitiesSuccess,
  getAllActuatorActivitiesNoNewUpdate,
  getAllActuatorActivitiesFailure,
  actuatorActivitiesRealtimeUpdate,
}


export default actuatorActivitiesActions