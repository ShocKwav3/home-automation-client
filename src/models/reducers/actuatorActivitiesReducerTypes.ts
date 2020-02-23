import {
    IActuatorActivity,
} from 'src/models/interfaces'

import {
    pendingActuatorActivitiesActionType,
    successActuatorActivitiesActionType,
    actuatorActivitiesNoNewUpdateActionType,
    getActuatorActivitiesFailureActionType,
    actuatorActivitiesRealtimeUpdateActionType,
} from 'src/models/actions/actuatorActivitiesActionTypes'


export type TactuatorActivitiesStateType = IActuatorActivity[]

export type TactuatorActivitiesActionTypes = pendingActuatorActivitiesActionType
                                            | successActuatorActivitiesActionType
                                            | actuatorActivitiesNoNewUpdateActionType
                                            | getActuatorActivitiesFailureActionType
                                            | actuatorActivitiesRealtimeUpdateActionType