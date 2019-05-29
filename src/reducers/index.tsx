import { combineReducers } from 'redux'
import homeState from './App'
import basicInfo from './BasicInfo'
import skillState from './SkillInfo'
import projectState from './ProjectInfo'
const reducer = combineReducers({
  homeState,
  basicInfo,
  skillState,
  projectState
})
export default reducer
