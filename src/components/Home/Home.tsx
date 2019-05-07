import * as React  from 'react'
import './style.less'

class Home extends React.Component {
  public render() {
    return (
      <div className="my-card">
        <div className="container cardetail">
            <div className="row my-items">
                <div className="col-md-8 col-sm-12 col-xs-12 item">
                  <div className="reveal">
                      <span className="circleLight" />
                      <div className="facade">
                          <h2>Hello, I'm <span>Daniel</span></h2>
                          <strong>Love life, love learnintechnology, try to change</strong>
                          <p className="my-name">我叫郑承文</p>
                          <p className="my-tag">一名新晋前端开发工程师</p>
                          <p className="my-Email">yiguzcw@163.com</p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Home