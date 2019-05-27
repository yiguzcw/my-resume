import * as React  from 'react'
import { Col, Row } from 'antd'
import './style.less'
import 'whatwg-fetch'
import 'es6-promise'
interface IHome {
  pageData: string,
}
class Home extends React.Component<IHome> {
  public state = {
    pageData: ""
  }
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
  }
  public render() {
    return (
      <div className="my-card">
        <div className="container cardetail">
          <Row className="my-items">
            <Col md={24} lg={8} xl={8} xxl={8} className="col-md-8 col-sm-12 col-xs-12 item">
              <div className="reveal">
                  <span className="circleLight" />
                  <div className="facade" dangerouslySetInnerHTML={{__html: this.state.pageData}} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Home