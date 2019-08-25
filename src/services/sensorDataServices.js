import sensorDataActions from '../actions/sensorDataActions'


const getSensorData = () => (dispatch: Function): void => {
  dispatch(sensorDataActions.getAllSensorDataPending());
}

const sensorDataServices: Object = {
  getSensorData,
}


export default sensorDataServices