import * as React  from 'react'
import { Row, Col } from 'antd'
import './style.less'
interface IProjects {
    projects: any[],
    getProjectsData: (payload?: object) => void
}
class Projects extends React.Component<IProjects> {
    public componentWillMount(){
        this.props.getProjectsData()
    }
    public render() {
    debugger
    console.log("项目经验",this.props)
    return (
        <div className="container" id='container-img'>
            <Row className="portfolio-items">
                {
                    this.props.projects.map((project:any)=>{
                        return(
                            <Col key={project.id} className="webItem active">
                                <div className="hover-bg">
                                    <a href={project.hyperlink} title={project.name}>
                                        <div className="hover-text">
                                            <h4>{project.title}</h4>
                                            <small>{project.technique}</small>
                                            <br />
                                            <strong>点击查看</strong>
                                            <i className="fa fa-search"/>
                                        </div>
                                        <img className="imgbg" src={project.imgbg} alt={project.name}/>
                                    </a>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
  }
}
export default Projects
