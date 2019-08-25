import { useSelector } from 'react-redux'

import Main from '../components/MainView'


type mainViewProps = {
  children: React.Node,
  history: Array<Object>,
}

const MainContainer = ({children, history}: mainViewProps) => {
  const stateSelector: Object = useSelector(state => state)

  return <Main history={history}>
           {children}
         </Main>
}

export default MainContainer