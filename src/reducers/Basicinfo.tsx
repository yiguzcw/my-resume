import { IActionInterface } from '../actions'
import { GET_BASIC_INFO } from '../actionTypes'
interface IBasics {
  my_pic: string,
  tags: any[],
  mySelf:string,
  motto:string
}
const basicStatus={
  my_pic: "",
  tags: [],
  mySelf:"",
  motto:""
}
const basicInfo = (state: IBasics = basicStatus, action: IActionInterface ): object => {
  switch (action.type) {
    case GET_BASIC_INFO:
      let newState = JSON.parse(JSON.stringify(state));
      newState = action.payload
      return newState
    default:
      return state
  }
}
export default basicInfo
