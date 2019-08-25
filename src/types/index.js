import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch
} from 'redux'

import type {
  typeSensorDataState,
  typeSensorDataActions,
} from './sensorDataTypes'
import type {
  typeActuatorActivitiesState,
  typeActuatorActivitiesActions,
} from './actuatorActivitiesTypes'


export type ReduxInitAction = { type: '@@INIT' }

export type State = typeSensorDataState & typeActuatorActivitiesState

export type Action = ReduxInitAction | typeSensorDataActions | typeActuatorActivitiesActions

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>