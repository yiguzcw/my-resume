import * as React from 'react'
import { IPayload } from '../../types'
import './style.less'
export interface IArticle {
  _id: string
  tag: ITag
  title: string
  create_at: string
  access: string
  type: string
  abstract: string
}
interface ITag {
  color: string
  title: string
}
interface IHistory {
  push: (pathname: string) => void
}
interface IArticles {
  articles: IArticle[]
  history: IHistory
  total: number
  fetchArticle: (payload: IPayload) => void
}
class Articles extends React.Component<IArticles> {
  public state = {
    pageIndex: 1,
    pageSize: 10
  }
  public onChange = (page: number, pageSize: number) => {
    this.setState(
      {
        pageIndex: page,
        pageSize
      },
      () => {
        this.props.fetchArticle(this.state)
      }
    )
  }
  public componentDidMount() {
    this.props.fetchArticle(this.state)
  }
  public render() {
    return (
      <div>
          werer
      </div>
    )
  }
}
export default Articles
