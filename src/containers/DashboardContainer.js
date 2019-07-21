import { useSelector, useDispatch } from 'react-redux'

import sensorDataServices from '../services/sensorDataServices'
import DashboardView from '../components/DashboardView'


const getSensorData = () => {
  const dispatch = useDispatch()

  dispatch(sensorDataServices.getSensorData())
}

const DashboardContainer = () => {
  const stateSelector = useSelector(state => state)

  return <DashboardView allState={stateSelector} />
}


export default DashboardContainer