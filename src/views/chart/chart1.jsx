/**
 * Created by lijie on 16/7/10.
 */

import React from 'react';
import ReactDom from 'react-dom';


import Echart from 'echarts/lib/echarts';

require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

const chart1Option = {
    title: { text: '商品销量' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};




export default class Chart1 extends React.Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){

        var myChart1 =Echart.init(this.refs.chart1);
        myChart1.setOption(chart1Option);


    }

    render(){
        return(
            <div className="ant-row" style={{marginTop:20}}>


                <div className="console-title console-title-border">
                    <div className="pull-left">
                        <h5>柱状图</h5>
                    </div>
                </div>

                <div className="ant-col-md-24" style={{height:500}} ref="chart1">

                </div>


            </div>
        )
    }
}