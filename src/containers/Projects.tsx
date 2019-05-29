import { connect } from 'react-redux'
import Projects from '../components/Projects/Projects'
import { GET_PROJECT_DATA } from '../actionTypes'
const mapStateToProps = (state: any): object => ({
  projects: state.projectState.projects,
})

export const mapDispatchToProps = (dispatch: any) => ({
  getProjectsData(){
    let result = fetch('/jsons/projects.json', {
      credentials: 'include', 
      headers: { 'Accept': 'application/json, text/plain, */*' } 
    });
    result.then(res => {
      return res.json()        // 将数据转换成json格式                
    }).then(data => {
      dispatch({
        type: GET_PROJECT_DATA,
        payload: data
      })
    }).catch(e=>{console.log("error")})
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)
