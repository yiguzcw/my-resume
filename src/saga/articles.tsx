import { call, put, takeEvery } from 'redux-saga/effects'
import { IActionInterface } from '../actions'
import { IS_SMALL_SCREEN } from '../actionTypes'
import { fetchArticles } from '../services'

function* yieldArticles(action: IActionInterface) {
  const { payload } = action
  const response = yield call(fetchArticles, payload)
  const { articles, total } = response
  yield put({ type: IS_SMALL_SCREEN, articles, total })
}
export function* watchYieldArticles() {
  yield takeEvery(IS_SMALL_SCREEN, yieldArticles)
}
