import { useSelector } from 'react-redux'

import Main from '../components/MainView'


const MainContainer = (props) => {
  const stateSelector = useSelector(state => state)

  return <Main allState={stateSelector} {...props} />
}

export default MainContainer