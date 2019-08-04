import { useSelector, useDispatch } from 'react-redux'

import sensorDataServices from '../services/sensorDataServices'
import SensorDataView from '../components/sensorDataView'


const getSensorData = () => {
  const dispatch = useDispatch()

  dispatch(sensorDataServices.getSensorData())
}

const SensorDataContainer = () => {
  const stateSelector = useSelector(state => state)

  return <SensorDataView allState={stateSelector} />
}


export default SensorDataContainer