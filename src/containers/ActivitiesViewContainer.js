import { useSelector, useDispatch } from 'react-redux'

import sensorDataServices from '../services/sensorDataServices'
import ActivitiesView from '../components/activitiesView'


const getSensorData = () => {
  const dispatch = useDispatch()

  dispatch(sensorDataServices.getSensorData())
}

const ActivitiesViewContainer = () => {
  const state: Object = useSelector(state => state)
  const sensorData: Array<Object> = state.sensorData

  return <ActivitiesView sensorData={sensorData} />
}


export default ActivitiesViewContainer