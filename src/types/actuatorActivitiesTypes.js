import { actuatorActivitiesActionTypes } from '../constants/actuatorActivitiesConstants'


const {
  GET_ACTUATOR_ACTIVITIES_ALL,
  GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS,
  GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE,
  GET_ACTUATOR_ACTIVITIES_ALL_FAILURE,
  ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE,
} = actuatorActivitiesActionTypes

type created_timestamp = string
type actuator_value = number
type actuator_device_id = number
type sensor_device_id = number

export type typeActuatorActivitiesSingle = {
  +created_timestamp: created_timestamp,
  +actuator_value: actuator_value,
  +actuator_device_id: actuator_device_id,
  +sensor_device_id: sensor_device_id,
}

export type typeActuatorActivities = Array<typeActuatorActivitiesSingle>

export type typeActuatorActivitiesState = {
  +actuatorActivities: typeActuatorActivities,
}

export type typeActuatorActivitiesActions =
  | { type: GET_ACTUATOR_ACTIVITIES_ALL }
  | { type: GET_ACTUATOR_ACTIVITIES_ALL_SUCCESS, +payload: typeActuatorActivities }
  | { type: GET_ACTUATOR_ACTIVITIES_ALL_NO_NEW_UPDATE }
  | { type: GET_ACTUATOR_ACTIVITIES_ALL_FAILURE }
  | { type: ACTUATOR_ACTIVITIES_SINGLE_REALTIME_UPDATE, +payload: typeActuatorActivitiesSingle }