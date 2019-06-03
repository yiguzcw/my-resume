import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from '../components/App/App'
import { IS_SMALL_SCREEN, CHANGE_BG_IMGS } from '../actionTypes'

const mapStateToProps = (state:any) => {
  return {
    headerMenu: state.homeState.headerMenu,
    isSmallScreen: state.homeState.isSmallScreen,
    shufflingImgs: state.homeState.shufflingImgs,
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    screenOpinion(){
      let offsetWid = document.documentElement.clientWidth;
      const isSmallScreen = offsetWid > 850 ? false : true;
      dispatch({
        type: IS_SMALL_SCREEN,
        payload: isSmallScreen
      })
    },
    bgImgsChange(louter:any){
      let bgImgs
      if(louter === "/"){
        bgImgs = [
          "images/page1_link_bg1.jpg",
          "images/page1_link_bg2.jpg",
          "images/page1_link_bg3.jpg",
          "images/page1_link_bg4.jpg",
        ]
      }else if(louter === "/basic"){
        bgImgs = [
          "images/myInfo_bg_pic.jpg"
        ]
      }else if(louter === "/skill"){
        bgImgs = [
          "images/my_skill_bg.jpg"
        ]
      }else if(louter === "/projects"){
        bgImgs = [
          "images/portfolio_bg.jpg"
        ]
      }else if(louter === "/experience"){
        bgImgs = [
          "images/my_work-exp_bg.jpg"
        ]
      }else if(louter === "/self-evaluation"){
        bgImgs = [
          "images/sejf-eval_bg.jpg"
        ]
      }
      dispatch({
        type: CHANGE_BG_IMGS,
        payload: bgImgs
      })
    }
  }
}
const AppMap: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default withRouter(AppMap)
