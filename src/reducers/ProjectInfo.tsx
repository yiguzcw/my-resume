import { IActionInterface } from '../actions'
import { GET_PROJECT_DATA } from '../actionTypes'
interface IBasics {
  projects: any[],
}
const projectStatus={
  projects: []
}
const projectState = (state: IBasics = projectStatus, action: IActionInterface ): object => {
  switch (action.type) {
    case GET_PROJECT_DATA:
      let newState = JSON.parse(JSON.stringify(state));
      newState = action.payload
      return newState
    default:
      return state
  }
}
export default projectState
