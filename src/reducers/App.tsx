import { IActionInterface } from '../actions'
import { IS_SMALL_SCREEN, CHANGE_BG_IMGS } from '../actionTypes'
const defaultStatus ={
  headerMenu : [
    { title: '基本资料', icon: { __html: '&#xe600;' }, url: '/basic' },
    { title: '专业技能', icon: { __html: '&#xe660;' }, url: '/skill' },
    { title: '工作经历', icon: { __html: '&#xe6a1;' }, url: '/experience' },
    { title: '项目经验', icon: { __html: '&#xe60e;' }, url: '/projects' },
    { title: '自我评价', icon: { __html: '&#xe60e;' }, url: '/self-evaluation' }
  ],
  isSmallScreen: false,
  shufflingImgs: [],

}
const homeState = (state: object = defaultStatus, action: IActionInterface): object => {
  switch (action.type) {

    case IS_SMALL_SCREEN:
      let newState = JSON.parse(JSON.stringify(state));
      newState.isSmallScreen = action.payload
      return newState
    case CHANGE_BG_IMGS:
      debugger
      let newStates = JSON.parse(JSON.stringify(state));
      newStates.shufflingImgs = action.payload
      return newStates
    default:
      return state
  }
}
export default homeState
