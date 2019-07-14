import { connect } from 'react-redux'

import sensorDataServices from '../services/sensorDataServices'
import Dashboard from '../components/Dashboard'


const mapStateToProps = (state) => {
  return {
    allState: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSensorData: () => dispatch(sensorDataServices.getSensorData()),
  }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)


export default DashboardContainer