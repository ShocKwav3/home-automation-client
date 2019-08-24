import sensorDataActions from '../actions/sensorDataActions'


const getSensorData = () => (dispatch) => {
  dispatch(sensorDataActions.getAllSensorDataPending());
}

const sensorDataServices = {
  getSensorData,
}


export default sensorDataServices