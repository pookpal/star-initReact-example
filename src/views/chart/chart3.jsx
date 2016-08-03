/**
 * Created by lijie on 16/7/10.
 */

import React from 'react';
import ReactDom from 'react-dom';


import Echart from 'echarts/lib/echarts';

require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');


function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
            Math.round(value)
        ]
    }
}

const dataSource = [];
var now = +new Date();
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;

for (var i = 0; i < 1000; i++) {
    dataSource.push(randomData());
}


const chart30ption = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: dataSource
    }]
};




export default class Chart3 extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            data: dataSource || []
        }

    }



    componentDidMount(){

        var myChart1 =Echart.init(this.refs.chart1);

        myChart1.showLoading();
        this.timeTicket = setInterval(function () {

            for (var i = 0; i < 5; i++) {

                var data = this.state.data;

                data.shift();

                data.push(randomData());

                this.setState({
                    data:data

                });

            }

            myChart1.setOption(chart30ption);
            myChart1.hideLoading();

        }.bind(this), 1000);


    }

    componentWillUnmount(){
        clearInterval(this.timeTicket);
    }



    render(){
        return(
            <div className="ant-row" style={{marginTop:20}}>


                <div className="console-title console-title-border">
                    <div className="pull-left">
                        <h5>动态折线图</h5>
                    </div>
                </div>


                <div className="ant-col-md-24" style={{height:500}} ref="chart1">

                </div>



            </div>
        )
    }
}