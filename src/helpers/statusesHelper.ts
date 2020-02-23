import _ from 'lodash'

import {
    sensorStatsUnknown,
    actuatorStatsUnknown,
} from 'src/constants/settings'

import {
    IActuatorActivity,
    ISensorData,
    ISensorLevelIndicator,
    IActuatorStateIndicator,
} from 'src/models/interfaces'
import {
    Tsensor_value,
    Tactuator_value,
} from 'src/models/primitiveTypes'


export const getMotorStatus = (motorActivities: IActuatorActivity[], moistureData: ISensorData): IActuatorActivity | undefined => {
  const activitiesSortedByDateDecOrder = _.orderBy(motorActivities, ['created_timestamp']).reverse()
  const lastKnownMotorStatus = _.find(activitiesSortedByDateDecOrder, time => new Date(time.created_timestamp) <= new Date(moistureData.created_timestamp))

  return lastKnownMotorStatus
}

export const getMoistureLevelIndicator = (moistureLevelIndicators: ISensorLevelIndicator[], moistureValue: Tsensor_value): ISensorLevelIndicator => {
  const moistureLevelIndicatorsOrdered = _.orderBy(moistureLevelIndicators, ['threshold'], ['asc'])

  return _.find(moistureLevelIndicatorsOrdered, level => level.threshold >= moistureValue) || sensorStatsUnknown
}

export const getActuatorStateIndicator = (actuatorStateIndicators: IActuatorStateIndicator[], actuatorStateValue?: Tactuator_value): IActuatorStateIndicator => (
  _.find(actuatorStateIndicators, {value: actuatorStateValue}) || actuatorStatsUnknown
)