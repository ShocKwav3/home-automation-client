import { useSelector, useDispatch } from 'react-redux'

import sensorDataServices from '../services/sensorDataServices'
import ActivitiesView from '../components/activitiesView'


const getSensorData = () => {
  const dispatch = useDispatch()

  dispatch(sensorDataServices.getSensorData())
}

const ActivitiesViewContainer = () => {
  const state = useSelector(state => state)
  const sensorData = state.sensorData

  return <ActivitiesView sensorData={sensorData} />
}


export default ActivitiesViewContainer