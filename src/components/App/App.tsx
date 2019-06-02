import { BackTop, Layout, Row } from 'antd'
import * as React from 'react'
import { ReactHTML } from 'react'
import Header from '../Layout/Header/Header'
import Bgcompone from '../Layout/Bgcompone/Bgcompone'

import Drogue from '../Layout/Drogue/Drogue'

import './style.less'
const { Content } = Layout

interface IProps {
  children: ReactHTML,
  headerMenu: any[],
  isSmallScreen: boolean,
  shufflingImgs: any[],
  match:any,
  screenOpinion: (payload?: object) => void,
  bgImgsChange: (payload?: object) => void
}
class App extends React.Component<IProps> {
  constructor(props:any){
    super(props)
    console.log(this.props)
  }
  public componentWillMount(){
    this.props.screenOpinion()
    this.props.bgImgsChange(this.props.match.path)
  }
  public render() {
    const { children } = this.props
    return (
      <Layout>
        <BackTop />
        <Header headerMenu={this.props.headerMenu} isSmall={this.props.isSmallScreen} />
        
        <Layout>
          <Content>
            <Row className="container">
              {children}
              <Bgcompone imgs={this.props.shufflingImgs}/>
            </Row>
          </Content>
        </Layout>
        <Drogue headerMenu={this.props.headerMenu}/>
        
      </Layout>
    )
  }
}

export default App
