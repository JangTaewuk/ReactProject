import s1Reducer from './s1Reducer'
import s2Reducer from './s2Reducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({s1Reducer,s2Reducer})

export default rootReducer
