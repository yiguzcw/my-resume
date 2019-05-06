import { Steps } from 'antd'
import 'rc-texty/assets/index.css'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.less'
const Step = Steps.Step;
interface IMenuProps {
  headerMenu: any[]
}

const DrogueDom = (props:IMenuProps) => {
  const steps = (
    <Steps direction="vertical" current={1}>
      {props.headerMenu.map(item => (
        <Step 
          key={item.title}
          icon={
            <Link to={item.url}>
            <span
              className="icon-font"
              dangerouslySetInnerHTML={item.icon}
            />
          </Link>
          }
        />
      ))}
    </Steps>
  )
  return (
    <div className="drogue">
      {steps}
    </div>
  )
}

export default DrogueDom
