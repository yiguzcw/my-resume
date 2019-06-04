import * as React  from 'react'
import ReactEcharts from "echarts-for-react";
import './style.less'
interface ISkills {
    xdata: any[],
    ydata: {
        ydata1: any[],
        ydata2: any[]
    }
  }
class Skillinfo extends React.Component<ISkills> {

    public componentDidMount() {
        console.log("技能页面参数",this.props)
    }
    public getOption() {
        return {
            title: { text: '掌握前端前沿技术' },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['框架']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {
                        show: true,
                        type: 'jpg'
                    }
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.props.xdata
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'熟练度',
                    type:'bar',
                    data: this.props.ydata,
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Hot'},
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        }
    }
    public onChartReadyCallback() {
        console.log("1212")
    }
    public onChartClick(){
        console.log("1212")
    }
    public onChartLegendselectchanged() {
        console.log("1212")
    }
    public render() {
        let EventsDict = {
            'click': this.onChartClick,
            'legendselectchanged': this.onChartLegendselectchanged
        }
        return (
            <div className="container skillBox">
                <ReactEcharts
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
                onChartReady={this.onChartReadyCallback}
                onEvents={EventsDict} />
            </div>
        )
    }
}
export default Skillinfo
