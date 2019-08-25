import _ from 'lodash'


export const getMotorStatus = (motorActivities: Array<Object>, moistureData: Object): Object => {
  const activitiesSortedByDateDecOrder: Array<Object> = _.orderBy(motorActivities, ['created_timestamp']).reverse()
  const lastKnownMotorStatus: Object | void = _.find(activitiesSortedByDateDecOrder, time => new Date(time.created_timestamp) <= new Date(moistureData.created_timestamp))

  return lastKnownMotorStatus
}

export const getMoistureLevelIndicator = (moistureLevelIndicators: Array<Object>, moistureValue: number | void): Object => {
  const moistureLevelIndicatorsOrdered: Array<Object> = _.orderBy(moistureLevelIndicators, ['threshold'], ['asc'])

  return _.find(moistureLevelIndicatorsOrdered, level => level.threshold >= moistureValue)
}

export const getActuatorStateIndicator = (actuatorStateIndicators: Array<Object>, actuatorStateValue: number | void): Object => {
  const unKnownStatus: Object = {icon: 'question', color: 'red', text: 'Unknown'}

  if(!actuatorStateValue && actuatorStateValue!==0) return unKnownStatus

  const actuatorStateIndicator = _.find(actuatorStateIndicators, {value: actuatorStateValue})

  if(!actuatorStateIndicator) return unKnownStatus

  return actuatorStateIndicator
}