import {
    getAllSensorDataPending,
} from 'src/actions/sensorDataActions'

import {
    TThunkDispatch,
} from 'src/models/thunk'


const getSensorData = (dispatch: TThunkDispatch) => {
    dispatch(getAllSensorDataPending);
}

const sensorDataServices = {
  getSensorData,
}


export default sensorDataServices