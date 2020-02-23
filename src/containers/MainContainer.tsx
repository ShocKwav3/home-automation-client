import React, {
    FunctionComponent,
}           from 'react'
import {
    useSelector,
}           from 'react-redux'
import {
    RouteComponentProps,
}           from 'react-router-dom'

import Main from '../components/MainView'

import {
    TrootState,
}           from 'src/models/reducers/rootReducerTypes'


const MainContainer: FunctionComponent<RouteComponentProps> = (props) => {
  const stateSelector = useSelector((state: TrootState) => state)

  return <Main {...props} />
}


export default MainContainer
