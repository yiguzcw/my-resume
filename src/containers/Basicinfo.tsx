import { connect } from 'react-redux'
import Basicinfo from '../components/Basicinfo/Basicinfo'
import { GET_BASIC_INFO } from '../actionTypes'

const mapStateToProps = (state: any): object => ({
  my_pic: state.basicInfo.my_pic,
  tags: state.basicInfo.tags,
  mySelf:state.basicInfo.mySelf,
  motto:state.basicInfo.motto
})

export const mapDispatchToProps = (dispatch: any) => ({
  getBasicData(){
    let result = fetch('/jsons/basic.json', {
      credentials: 'include', 
      headers: { 'Accept': 'application/json, text/plain, */*' } 
    });
    result.then(res => {
      return res.json()        // 将数据转换成json格式                
    }).then(data => {
      dispatch({
        type: GET_BASIC_INFO,
        payload: data
      })
    }).catch(e=>{console.log("error")})
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basicinfo)
