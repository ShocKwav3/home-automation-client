import sensorDataActions from '../actions/sensorDataActions'


const getSensorData = () => (dispatch) => {
  dispatch(sensorDataActions.getSensorData());
}

const sensorDataServices = {
  getSensorData,
}


export default sensorDataServices