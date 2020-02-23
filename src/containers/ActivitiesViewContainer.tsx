import React              from 'react'
import {
    useSelector,
    useDispatch,
}                         from 'react-redux'

import sensorDataServices from 'src/services/sensorDataServices'
import ActivitiesView     from 'src/components/activitiesView'

import {
    TrootState,
}                         from 'src/models/reducers/rootReducerTypes'


const getSensorData = () => {
  const dispatch = useDispatch()

  dispatch(sensorDataServices.getSensorData)
}

const ActivitiesViewContainer = () => {
  const sensorData = useSelector((state: TrootState) => state.sensorData)

  return <ActivitiesView sensorData={sensorData} />
}


export default ActivitiesViewContainer