import { combineReducers } from 'redux'
import homeState from './App'
import basicInfo from './Basicinfo'
const reducer = combineReducers({
  homeState,
  basicInfo
})
export default reducer
