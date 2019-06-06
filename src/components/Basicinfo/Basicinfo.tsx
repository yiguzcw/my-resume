import * as React  from 'react'
import { Row, Col } from 'antd'
import './style.less'
interface IBasics {
    my_pic: string,
    tags: any[],
    mySelf:string,
    motto:string,
    getBasicData: (payload?: object) => void
}
class Basicinfo extends React.Component<IBasics> {
    public componentWillMount(){
        this.props.getBasicData()
    }
    public render() {
        console.log("基础信息入参",this.props)  
        return (
            <div className="container myInfo">
                <Row>
                    <Col className="col-md-8 col-sm-12 information">
                        <div className="my_pic">
                            <img src={this.props.my_pic} alt="头像"/>
                        </div>
                        <Row className="dabiao">
                            {
                                this.props.tags.map((item)=>{
                                    return (
                                        <Col key={item.value} className="imgCol" xl={6} md={6} sm={12}>
                                            <div className="img">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className="text">
                                                <h5>{item.text}</h5>
                                            </div>
                                        </Col>
                                    )
                                }) 
                            }
                        <Col className="description">
                            <p>{this.props.mySelf}</p>
                            <p>{this.props.motto}</p>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
  }
}
export default Basicinfo
