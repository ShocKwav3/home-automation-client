import { useSelector } from 'react-redux'
import _ from 'lodash'

import {
  getMotorStatus,
  getMoistureLevelIndicator,
  getActuatorStateIndicator,
} from '../helpers/statusesHelper'
import {
  moistureLevelIndicators,
  motorStateIndicators,
} from '../constants/settings'
import Statuses from '../components/Statuses'


const StatusesContainer = ({singleSensorData}) => {
  const state = useSelector(state => state)
  const motorStatus = getMotorStatus(state.actuatorActivities, singleSensorData)
  const moistureValue = _.get(singleSensorData, 'sensor_value')
  const motorStateValue = _.get(motorStatus, 'actuator_value')
  const moistureIndicator = getMoistureLevelIndicator(moistureLevelIndicators, moistureValue)
  const motorIndicator = getActuatorStateIndicator(motorStateIndicators, motorStateValue)

  return <Statuses data={[moistureIndicator, motorIndicator]} />
}


export default StatusesContainer