import { useSelector, useDispatch } from 'react-redux'

import sensorDataServices from '../services/sensorDataServices'
import Dashboard from '../components/DashboardView'


getSensorData = () => {
  const dispatch = useDispatch()

  dispatch(sensorDataServices.getSensorData())
}

const DashboardContainer = () => {
  const stateSelector = useSelector(state => state)

  return <Dashboard allState={stateSelector} />
}


export default DashboardContainer