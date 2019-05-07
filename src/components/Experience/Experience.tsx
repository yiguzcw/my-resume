import * as React  from 'react'
import './style.less'

class Experience extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="finger-top hidden-xs">
            <img src="images/little_finger_bg1.png" />
        </div>
        <h3 className="title">个人经历</h3>
        <ul className="row experienced">
            <li>
                <div className="col-xs-5 work-time">
                    <h5>16.06-18.03 </h5>
                </div>
                <div className="col-xs-7 company">
                    <span className="epx-icon"><i/></span>
                    <h5>深圳市青年国际旅行社有限公司</h5>
                    <p className="post">&lt技术部 网页制作师&gt</p>
                    <p>负责网站规划、网站布局、内容结构规划、网站页面效果设计、利用HTML、Css和Js制作效果的实现
                        利用PSD切图并配合webstorm等工具实现页面的交互动效</p>
                </div>
            </li>
            <li>
                <div className="col-xs-5 work-time">
                    <h5>15.03-16.05</h5>
                </div>
                <div className="col-xs-7 company">
                    <span className="epx-icon"><i/></span>
                    <h5>深圳凯隆科技有限公司</h5>
                    <p className="post">&lt技术部 网页制作师&gt</p>
                    <p>
                        负责公司官网、产品页面，产品介绍推广页的布局效果设计、HTML、Css、Js制作页面与动态效果的实现
                    </p>
                </div>
            </li>
            <li>
                <div className="col-xs-5 work-time">
                    <h5>13.07-15.02</h5>
                </div>
                <div className="col-xs-7 company">
                    <span className="epx-icon"><i/></span>
                    <h5>广州新耶商贸有限公司</h5>
                    <p className="post">&lt电商部 网编美工&gt</p>
                    <p>负责网站后台维护，静态页面优化，公司电商平台网站的维护，微博、微信等新媒体营销和推广，页面图片的设计制作</p>
                </div>
            </li>
            <li>
                <div className="col-xs-5 work-time">
                    <h5>09.09-13.06</h5>
                </div>
                <div className="col-xs-7 company">
                    <span className="epx-icon"><i/></span>
                    <h5>广东海洋大学</h5>
                    <p className="post">&lt专业 国际经济与贸易&gt</p>
                </div>
            </li>
        </ul>
        <div className="finger-bottom hidden-xs">
            <img src="images/little_finger_bg2.png" />
        </div>
      </div>
    )
  }
}
export default Experience
