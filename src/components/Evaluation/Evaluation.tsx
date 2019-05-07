import * as React  from 'react'
import './style.less'

class Evaluation extends React.Component {
  public render() {
    return (
      <div className="self-cover">
        <h3>CONTACT<span>FOR Me</span></h3>
        <div className="word">
            <p>有责任心，工作踏实</p>
            <p>性格开朗乐观，积极上进</p>
            <p>喜欢结交朋友，行路有良友，便是捷径</p>
            <p>前端即兴趣，兴趣即未来，喜欢Js，喜欢钻研技术</p>
            <p>具有很强的自学能力，喜欢尝试，期待新鲜事物，享受学习过程</p>
        </div>
        <div className="pendant">
            <div className="corner1 corner">
                <img src="images/sejf-eval_bg1.png" alt=""/>
            </div>
            <div className="corner2 corner">
                <img src="images/sejf-eval_bg2.png" alt=""/>
            </div>
            <div className="corner3 corner">
                <img src="images/sejf-eval_bg3.png" alt=""/>
            </div>
            <div className="corner4 corner">
                <img src="images/sejf-eval_bg4.png" alt=""/>
            </div>
        </div>
      </div>
    )
  }
}
export default Evaluation
