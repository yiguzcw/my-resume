import { connect } from 'react-redux'
import Evaluation from '../components/Evaluation/Evaluation'

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

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Evaluation)
