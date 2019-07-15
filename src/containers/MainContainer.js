import { connect } from 'react-redux'

import Main from '../components/Main'


const mapStateToProps = (state) => {
  return {
    allState: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)


export default MainContainer