import { connect } from 'react-redux'
import Projects from '../components/Projects/Projects'
import { REQUEST_ARTICLES } from '../constants'
import { IPayload } from '../types'

interface IState {
  articles: IBasics
}
interface IBasics {
  articles: any
  total: number
}
const mapStateToProps = (state: IState): object => ({
  articles: state.articles.articles,
  total: state.articles.total
})

export const mapDispatchToProps = (dispatch: any) => ({
  fetchArticle: (payload: IPayload) => {
    dispatch({
      payload,
      type: REQUEST_ARTICLES
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)
