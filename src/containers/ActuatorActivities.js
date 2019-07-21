import { useSelector, useDispatch } from 'react-redux'

import ActuatorActivitiesView from '../components/ActuatorActivitiesView'


const ActuatorActivitiesContainer = () => {
  const stateSelector = useSelector(state => state)

  return <ActuatorActivitiesView allState={stateSelector} />
}


export default ActuatorActivitiesContainer