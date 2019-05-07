import * as React  from 'react'
import './style.less'

class Skillinfo extends React.Component {
  public render() {
    return (
      <div className="container skill-wepr">
        <h2>我的技能 Skills:</h2>
        <ul className="skills">
          <li className="html">
              <div className="col-lg-2 col-xs-5 ">
                  <h4 >HTML5:  <span> 70% </span></h4>
              </div>
              <div className="col-lg-5 col-xs-7">
                  <div className="progress">
                      <div className="progress-bar progress-bar-striped active" />

                  </div>
              </div>
              <p className="col-lg-5 col-xs-12">1.熟悉W3C标准，Web语义化等有较为深刻的理解。</p>
          </li>
          <li className="css">
              <div className="col-lg-2 col-xs-5 ">
                  <h4>CSS3:  <span> 80% </span></h4>
              </div>
              <div className="col-lg-5 col-xs-7">
                  <div className="progress">
                      <div className="progress-bar progress-bar-striped active" />
                  </div>
              </div>
              <p className="col-lg-5 col-xs-12">2. 熟练HTML5，CSS3，JavaScript技术，开发符合W3C标准的网页。</p>
          </li>
          <li className="js">
              <div className="col-lg-2 col-xs-5 ">
                  <h4>JavaScript:  <span> 65% </span></h4>
              </div>
              <div className="col-lg-5 col-xs-7">
                  <div className="progress">
                      <div className="progress-bar progress-bar-striped active" />
                  </div>
              </div>
              <p className="col-lg-5 col-xs-12">3. 熟练使用jQuery，bootstrap等前端框架技术。</p>
          </li>
          <li className="jq">
              <div className="col-lg-2 col-xs-5 ">
                  <h4>jQuery:  <span> 85% </span></h4>
              </div>
              <div className="col-lg-5 col-xs-7">
                  <div className="progress">
                      <div className="progress-bar progress-bar-striped active"/>
                  </div>
              </div>
              <p className="col-lg-5 col-xs-12">4.熟悉Ajax的运行机制，能使用ajax进行数据交互。</p>
          </li>
          <li className="ps">
              <div className="col-lg-2 col-xs-5 ">
                  <h4>photoshop:  <span> 85% </span></h4>
              </div>
              <div className="col-lg-5 col-xs-7">
                  <div className="progress">
                      <div className="progress-bar progress-bar-striped active"/>
                  </div>
              </div>
              <p className="col-lg-5 col-xs-12">熟练使用PS，fireworks等工具，能快速切图和搭建页面。</p>
          </li>
      </ul>
        <div className="ski-star hidden-xs">
            <span className="subject-1">Ajax</span>
            <span className="subject-2">jQuery</span>
            <span className="subject-3">HTML5</span>
            <span className="subject-4">CSS3</span>
            <span className="subject-5">移动端</span>
            <span className="subject-6">响应式</span>
            <span className="subject-7">javascript</span>
            <span className="subject-8">Angular</span>
            <span className="subject-9">Bootstrap</span>
            <span className="subject-10">Nodejs</span>
        </div>
      </div>
    )
  }
}
export default Skillinfo
