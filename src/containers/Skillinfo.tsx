import { connect } from 'react-redux'
import Skillinfo from '../components/Skillinfo/Skillinfo'

const mapStateToProps = (state:any) => {
  return {
    xdata: state.skillState.xdata,
    ydata: state.skillState.ydata
  }
}

export const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skillinfo)
