import { connect } from 'react-redux'
import Basicinfo from '../components/Basicinfo/Basicinfo'
import { IS_SMALL_SCREEN } from '../actionTypes'
import { IPayload } from '../types'

interface IBasics {
  logoImg: any,
  basicinfo: IBasicInfo,
  container: string,
}
interface IBasicInfo {
  img: any
  title: string
}
const mapStateToProps = (state: IBasics): object => ({

})

export const mapDispatchToProps = (dispatch: any) => ({
  fetchArticle: (payload: IPayload) => {
    dispatch({
      payload,
      type: IS_SMALL_SCREEN
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basicinfo)
