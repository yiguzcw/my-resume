import * as React from 'react'
import { Carousel } from 'antd';
import { IPayload } from '../../types'
import './style.less'
export interface IBasicinterface {
  _id: string
  tag: ITag
  title: string
  create_at: string
  access: string
  type: string
  abstract: string
}
interface ITag {
  color: string
  title: string
}
interface IHistory {
  push: (pathname: string) => void
}
interface IBasicinfos {
  articles: IBasicinterface[]
  history: IHistory
  total: number
  fetchArticle: (payload: IPayload) => void
}
class Basicinfo extends React.Component<IBasicinfos> {
  public state = {
    shufflingImgs:[
      "images/page1_link_bg1.jpg",
      "images/page1_link_bg2.jpg",
      "images/page1_link_bg3.jpg",
      "images/page1_link_bg4.jpg",
    ]
  }

  public render() {
    return (
      <Carousel autoplay={true} effect="fade" className="imgBox" >
        {
          this.state.shufflingImgs.map((item,index)=>{
            return <div key={index}><span className="bgimage" style={{backgroundImage:"url("+process.env.PUBLIC_URL + item+")"}}>1</span></div>
          }) 
        }
      </Carousel>
    )
  }
}
export default Basicinfo
