import { useSelector } from 'react-redux'

import Main from '../components/MainView'


const MainContainer = () => {
  const stateSelector = useSelector(state => state)

  return <Main allState={stateSelector} />
}

export default MainContainer