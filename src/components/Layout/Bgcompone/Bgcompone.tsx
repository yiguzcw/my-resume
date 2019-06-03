import * as React  from 'react'
import { Carousel } from 'antd';
import './style.less'

interface IBgProps {
  imgs: any[]
}
const Bgcompone = (props:IBgProps) => {
  return (
    <Carousel autoplay={true} effect="fade" className="imgBox" >
      {
        props.imgs.map((item,index)=>{
          return <div key={index}><span className="bgimage" style={{backgroundImage:"url("+process.env.PUBLIC_URL + item+")"}}/></div>
        }) 
      }
    </Carousel>
  )
}
export default Bgcompone