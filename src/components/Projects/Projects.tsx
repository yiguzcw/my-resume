import * as React  from 'react'
import './style.less'

class Projects extends React.Component {
  public render() {
    return (
      <div className="container" id='container-img'>
        <div className="row portfolio-items">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 webItem active">
                <div className="hover-bg">
                    <a href='images/ly_App/index.html' title="旅游App">
                        <div className="hover-text">
                            <h4>结伴旅游App</h4>
                            <small>技术：Html+Css+zepto</small>
                            <br />
                            <strong>点击查看</strong>
                            <i className="fa fa-search"/>
                        </div>
                        <img className="imgbg" src="images/pruduct/lvyou_App.png" alt="个人简历" />
                    </a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 webItem">
                <div className="hover-bg">
                    <a href='images/p2p/index.html' title="华兴财富">
                        <div className="hover-text">
                            <h4>华兴财富p2p网页</h4>
                            <small>技术：HTML+Css+Js+jQuery</small>
                            <br />
                            <strong>点击查看</strong>
                            <i className="fa fa-search"/>
                        </div>
                        <img className="imgbg" src="images/pruduct/hxcf_page_mini.jpg" alt="华兴财富"/>
                    </a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 webItem">
                <div className="hover-bg">
                    <a href='images/pruduct/qinglv_page.jpg' title="旅游网站">
                        <div className="hover-text">
                            <h4>自主旅游网站页面</h4>
                            <small>技术：HTML+Css+Js+jQuery</small>
                            <br/>
                            <strong>点击查看</strong>
                            <i className="fa fa-search"/>
                        </div>
                        <img className="imgbg" src="images/pruduct/qinglv_page_mini.jpg" alt="旅游网站"/>
                    </a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 webItem">
                <div className="hover-bg">
                    <a href='images/qinglv/index.html' title="旅游电商">
                        <div className="hover-text">
                            <h4>旅游电商网店页面</h4>
                            <small>技术：HTML+Css+Photoshop</small>
                            <br/>
                            <strong>点击查看</strong>
                            <i className="fa fa-search"/>
                        </div>
                        <img className="imgbg" src="images/pruduct/qinglv_shop_mini.jpg" alt="旅游电商"/>
                    </a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 webItem">
                <div className="hover-bg">
                    <a href='#jl_page1' title="个人简历">
                        <div className="hover-text">
                            <h4>响应式个人简历</h4>
                            <small>技术：jQuery+bootstrap</small>
                            <br/>
                            <strong>点击查看</strong>
                            <i className="fa fa-search"/>
                        </div>
                        <img className="imgbg" src="images/pruduct/this_demo_mini.jpg" alt="个人简历"/>
                    </a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 webItem">
                <div className="hover-bg">
                    <a href='images/pruduct/E-busine_detail2.jpg' title="电商详情页">
                        <div className="hover-text">
                            <h4>旅游电商详情页</h4>
                            <small>技术：HTML+Css+Photoshop</small>
                            <i className="fa fa-search"/>
                        </div>
                        <img className="imgbg" src="images/pruduct/E-busine_detail2_mini.jpg" alt="旅游电商页"/>
                    </a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Projects
