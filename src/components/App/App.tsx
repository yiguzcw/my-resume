import { BackTop, Col, Layout, Row } from 'antd'
import * as React from 'react'
import { ReactHTML } from 'react'
import { IPayload } from '../../types'
import Header from '../Layout/Header/Header'

import Drogue from '../Layout/Drogue/Drogue'

import './style.less'
const { Content } = Layout

interface IProps {
  children: ReactHTML
  fetchArticle: (payload: IPayload) => void
}
class App extends React.Component<IProps> {
  public state = {
    headerMenu : [
      { title: '基本资料', icon: { __html: '&#xe600;' }, url: '/' },
      { title: '专业技能', icon: { __html: '&#xe660;' }, url: '/skill' },
      { title: '工作经历', icon: { __html: '&#xe6a1;' }, url: '/experience' },
      { title: '项目经验', icon: { __html: '&#xe60e;' }, url: '/project' },
      { title: '自我评价', icon: { __html: '&#xe60e;' }, url: '/self-evaluation' }
    ]
  }

  public render() {
    const { children, fetchArticle } = this.props
    return (
      <Layout>
        <BackTop />
        <Header fetchArticle={fetchArticle} headerMenu={this.state.headerMenu}/>
        <Layout>
          <Content>
            <Row>
              <Col xs={1} sm={1} md={1} lg={1} xl={3} xxl={5} />
              <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={14}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                    {children}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Drogue headerMenu={this.state.headerMenu}/>
        
      </Layout>
    )
  }
}

export default App
