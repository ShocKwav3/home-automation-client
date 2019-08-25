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


type statuesProps = {
  singleSensorData: Object,
}

const StatusesContainer = ({singleSensorData}: statuesProps) => {
  const state: Object = useSelector(state => state)
  const motorStatus: Object | void = getMotorStatus(state.actuatorActivities, singleSensorData)
  const moistureValue: number | void = _.get(singleSensorData, 'sensor_value')
  const motorStateValue: number | void = _.get(motorStatus, 'actuator_value')
  const moistureIndicator: Object = getMoistureLevelIndicator(moistureLevelIndicators, moistureValue)
  const motorIndicator: Object = getActuatorStateIndicator(motorStateIndicators, motorStateValue)

  return <Statuses data={[moistureIndicator, motorIndicator]} />
}


export default StatusesContainer