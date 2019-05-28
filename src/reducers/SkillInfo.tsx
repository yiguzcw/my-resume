import { IActionInterface } from '../actions'
// import { IS_SMALL_SCREEN } from '../actionTypes'
const defaultStatus ={
  xdata: ['Jquery','Vue','React','Nodejs','SCSS/LESS','Webpack','TypeScript','loash'],
  ydata: [90, 86, 80, 30, 90, 75, 79, 75]
}
const skillState = (state: object = defaultStatus, action: IActionInterface): object => {
  switch (action.type) {
    default:
      return state
  }
}
export default skillState
