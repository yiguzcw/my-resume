import { combineReducers } from 'redux'
import homeState from './App'
import basicInfo from './BasicInfo'
import skillState from './SkillInfo'
const reducer = combineReducers({
  homeState,
  basicInfo,
  skillState
})
export default reducer
