import {
    ThunkDispatch
} from 'redux-thunk'
import {
    Action
} from 'redux'

import {
    TrootState,
} from 'src/models/reducers/rootReducerTypes'


export type TThunkDispatch = ThunkDispatch<TrootState, undefined, Action>;