import _ from 'lodash'


export const getMotorStatus = (motorActivities, moistureData) => {
  const activitiesSortedByDateDecOrder = _.orderBy(motorActivities, ['created_timestamp']).reverse()
  const lastKnownMotorStatus = _.find(activitiesSortedByDateDecOrder, time => new Date(time.created_timestamp) <= new Date(moistureData.created_timestamp))

  console.log("========>FINALE", lastKnownMotorStatus, moistureData, motorActivities)
  return lastKnownMotorStatus
}

export const getMoistureLevelIndicator = (moistureLevelIndicators, moistureValue) => {
  const moistureLevelIndicatorsOrdered = _.orderBy(moistureLevelIndicators, ['threshold'], ['asc'])
console.log("CHECK CHECK CHECK", moistureLevelIndicatorsOrdered)
  return _.find(moistureLevelIndicatorsOrdered, level => level.threshold >= moistureValue)
}

export const getActuatorStateIndicator = (actuatorStateIndicators, actuatorStateValue) => (
  _.find(actuatorStateIndicators, {value: actuatorStateValue}) || {icon: 'question', color: 'red', text: 'Unknown'}
)