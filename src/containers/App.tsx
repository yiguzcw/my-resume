import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from '../components/App/App'
import { IS_SMALL_SCREEN } from '../actionTypes'

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
    }
  }
}
const AppMap: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default withRouter(AppMap)
