import React, {
    FunctionComponent,
}               from 'react'
import {
    useSelector,
}               from 'react-redux'
import {
    RouteComponentProps,
}               from 'react-router-dom'
import _        from 'lodash'

import {
    getMotorStatus,
    getMoistureLevelIndicator,
    getActuatorStateIndicator,
}               from '../helpers/statusesHelper'
import {
    moistureLevelIndicators,
    motorStateIndicators,
}               from 'src/constants/settings'
import Statuses from 'src/components/Statuses'

import {
    ISensorData,
}               from 'src/models/interfaces'
import {
    TrootState,
}               from 'src/models/reducers/rootReducerTypes'


interface IStatusesContainerProps /*extends RouteComponentProps*/ {
    singleSensorData: ISensorData,
}

const StatusesContainer: FunctionComponent<IStatusesContainerProps> = ({singleSensorData}) => {
  const state = useSelector((state: TrootState) => state)
  const motorStatus = getMotorStatus(state.actuatorActivities, singleSensorData)
  const moistureValue = _.get(singleSensorData, 'sensor_value')
  const motorStateValue = _.get(motorStatus, 'actuator_value')
  const moistureIndicator = getMoistureLevelIndicator(moistureLevelIndicators, moistureValue)
  const motorIndicator = getActuatorStateIndicator(motorStateIndicators, motorStateValue)

  return <Statuses data={[moistureIndicator, motorIndicator]} />
}


export default StatusesContainer
