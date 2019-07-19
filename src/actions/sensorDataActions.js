import { sensorDataActionTypes } from '../constants/sensorDataConstants'


const getSensorData = () => ({
  type: sensorDataActionTypes.GET_SENSOR_DATA,
})

const sensorDataActions = {
  getSensorData,
}


export default sensorDataActions