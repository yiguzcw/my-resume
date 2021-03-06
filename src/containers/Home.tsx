import { connect } from 'react-redux'
import Home from '../components/Home/Home'
import { IS_SMALL_SCREEN } from '../actionTypes'
import { IPayload } from '../types'

interface IState {
  articles: IBasics
}
interface IBasics {
  articles: any
  total: number
}
const mapStateToProps = (state: IState): object => ({

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
)(Home)
