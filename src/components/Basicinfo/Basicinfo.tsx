import * as React  from 'react'
import './style.less'

class Basicinfo extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12 information">
              <div className="my_pic">
                  <img src="images/my_picture.jpg" alt="头像"/>
              </div>
              <div className="dabiao">
                  <div className="col-xs-3">
                      <div className="img">
                          <img src="images/i_age.svg" alt=""/>
                      </div>
                      <div className="text">
                          <h5>年龄/29岁</h5>
                      </div>
                  </div>
                  <div className="col-xs-3">
                      <div className="img">
                          <img src="images/i_edu.svg" alt=""/>
                      </div>
                      <div className="text">
                          <h5>学历/本科</h5>
                      </div>
                  </div>
                  <div className="col-xs-3">
                      <div className="img">
                          <img src="images/i_site.svg" alt=""/>
                      </div>
                      <div className="text">
                          <h5>坐标/深圳</h5>
                      </div>
                  </div>
                  <div className="col-xs-3">
                      <div className="img">
                          <img src="images/i_status.svg" alt=""/>
                      </div>
                      <div className="text">
                          <h5>状态/离职</h5>
                      </div>
                  </div>
              </div>
              <p>
我叫郑承文，目前在深圳，我并不是计算机专业,但对前端很感兴趣，所以自学前端，今后的职业规划是朝着全栈发展，目前在学react、vue还有php，有多难互联网行业工作经验,，在自学前端之前，我主要从事的是电商网站方面的工作，大学时候就接触过网页三剑客，对HTML有一定的了解，所以就决心转投到里面来，我具有高效的自学能力,具备独立分析解决问题能力，规范化的编程，良好的代码编写习惯。
              </p>
              <p>
前端是一个不断更新和挑战自己的职业，在前端的路上我相信我会走的更远。。。
              </p>
          </div>
      </div>
  </div>
    )
  }
}
export default Basicinfo
