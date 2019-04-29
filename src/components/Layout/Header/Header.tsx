import { Col, Dropdown, Icon, Layout, Menu, Row } from 'antd'
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css'
import TweenOne from 'rc-tween-one'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.less'
const { Header } = Layout
const geInterval = (e: any) => {
  switch (e.index) {
    case 0:
      return 0
    case 1:
      return 150
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return 150 + 450 + (e.index - 2) * 10
    default:
      return 150 + 450 + (e.index - 6) * 150
  }
}
const getEnter = (e: any) => {
  const t = {
    opacity: 0,
    scale: 0.8,
    y: '-100%'
  }
  if (e.index >= 2 && e.index <= 6) {
    return { ...t, y: '-30%', duration: 150 }
  }
  return t
}

interface IProps {
  fetchArticle: (payload: object) => void,
  headerMenu: any[]
}
const HeaderDom = (props: IProps) => {
  const menu = (
    <Menu className="menu">
      {props.headerMenu.map(item => (
        <Menu.Item key={item.title} className="header-title-item">
          <Link to={item.url}>
            <span
              className="icon-font"
              style={{ marginRight: 5 }}
              dangerouslySetInnerHTML={item.icon}
            />
            {item.title}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <div className="header">
      <Header>
        <Row>
          <Col md={24} lg={24} xl={24} xxl={24}>
            <div className="header-logo-wrp">
              <img src="images/my-head-portrait.jpg"/>
            </div>
            <div className="header-title-wrp">
              <Texty
                className="title"
                type="mask-top"
                delay={400}
                enter={getEnter}
                interval={geInterval}
                component={TweenOne}
                componentProps={{
                  animation: [
                    { x: 130, type: 'set' },
                    { x: 100, delay: 500, duration: 450 },
                    {
                      duration: 300,
                      ease: 'easeOutQuart',
                      x: 0
                    },
                    {
                      delay: -300,
                      duration: 1000,
                      ease: 'easeInOutQuint',
                      letterSpacing: 0,
                      scale: 0.9
                    },
                    {
                      delay: -300,
                      duration: 1000,
                      ease: 'easeInOutQuint',
                      scale: 1,
                      width: '100%'
                    }
                  ]
                }}>
                Daniel's resume
              </Texty>
            </div>
            <div className="header-menu-wrp">
              {props.headerMenu.map(item => (
                <div key={item.title} className="header-title-item">
                  <Link to={item.url}>
                    <span
                      className="icon-font"
                      style={{ marginRight: 5 }}
                      dangerouslySetInnerHTML={item.icon}
                    />
                    {item.title}
                  </Link>
                </div>
              ))}
              <Dropdown overlay={menu} trigger={['click']}>
                <Icon type="bars" className="menu-button" />
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Header>
    </div>
  )
}

export default HeaderDom
