import * as React  from 'react'
import { Col, Row } from 'antd'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.less'
import 'whatwg-fetch'
import 'es6-promise'
interface IHome {
  pageData: string
}
class Home extends React.Component<IHome> {
  public state = {
    pageData: "",
  }
  public interval:any = null
  public componentWillMount(){
    let result = fetch('/jsons/home.json', {
      credentials: 'include', 
      headers: { 'Accept': 'application/json, text/plain, */*' } 
    });
    result.then(res => {
      return res.json()        // 将数据转换成json格式                
    }).then(data => {
      this.setState({pageData:data.content})
    }).catch(e=>{console.log("error")})
    this.interval = setInterval(()=>{"abc"}, 2000);
  }
  public componentWillUnmount() {
      clearInterval(this.interval)
  }
  public render() {
    return (
      <div className="my-card">
        <Row className="my-items cardetail">
          <Col sm={24} md={24} lg={24} xl={24} xxl={24} className="reveal">
            <span className="circleLight" />
            <div className="facade" dangerouslySetInnerHTML={{__html: this.state.pageData}} />
          </Col>
          <ReactCSSTransitionGroup
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={1500}
            transitionName="animated"
          >
            <div key="next-page" className="next-page animated fadeInDownBig/" >
              <span/>
            </div>
          </ReactCSSTransitionGroup>
        </Row>
      </div>
    )
  }
}
export default Home