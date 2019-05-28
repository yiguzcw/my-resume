import * as React  from 'react'
import 'whatwg-fetch'
import 'es6-promise'
import './style.less'
interface IExperience {
    id: string,
    time: string,
    company: string,
    position: string,
    job_description: string,
}
interface IExperiences {
    experiences:IExperience[]
}
class Experience extends React.Component<IExperiences> {
    public state = {
        experiences:[]
    }
    public componentDidMount() {
        let result = fetch('/jsons/experience.json', {
            credentials: 'include', 
            headers: { 'Accept': 'application/json, text/plain, */*' } 
        });
        result.then(res => {
            return res.json()        // 将数据转换成json格式                
        }).then(data => {
            debugger
            this.setState({experiences:data.experiences})
        }).catch(e=>{console.log("error")})
    }
    public render() {
    return (
      <div className="container">
        <div className="finger-top hidden-xs">
            <img src="images/little_finger_bg1.png" />
        </div>
        <h3 className="title">个人经历</h3>
        <ul className="row experienced">
            {this.state.experiences.map((item:any)=>{
                return(
                    <li key={item.id}>
                        <div className="col-xs-5 work-time">
                            <h5>{item.time} </h5>
                        </div>
                        <div className="col-xs-7 company">
                            <span className="epx-icon"><i/></span>
                            <h5>{item.company}</h5>
                            <p className="post">&lt{item.position}&gt</p>
                            <p>{item.job_description}</p>
                        </div>
                    </li>
                )}
            )}
        </ul>
        <div className="finger-bottom hidden-xs">
            <img src="images/little_finger_bg2.png" />
        </div>
      </div>
    )
  }
}
export default Experience
