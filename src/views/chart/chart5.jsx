/**
 * Created by lijie on 16/7/10.
 */

import React from 'react';

import Echarts from 'echarts';
import request from 'superagent';



const chart4Option = {
    title: {
        text: '北京16区县常住人口数量 （2013）',
        subtext: '人口数据来自北京市统计局',
        sublink: 'http://www.bjstats.gov.cn/nj/qxnj/2014/zk/indexch.htm'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} (万人)'
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        min: 10,
        max: 400,
        text:['High','Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['lightskyblue','yellow', 'orangered']
        }
    },
    series: [
        {
            name: '北京16区常住人口',
            type: 'map',
            mapType: 'BJ', // 自定义扩展图表类型
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '延庆县', value: 31.64},
                {name: '怀柔区', value: 38.2},
                {name: '密云县', value: 47.6},
                {name: '昌平区', value: 188.9},
                {name: '顺义区', value: 98.3},
                {name: '平谷区', value: 42.2},
                {name: '门头沟区', value: 30.3},
                {name: '石景山区', value: 64.4},
                {name: '海淀区', value: 357.6},
                {name: '房山区', value: 101.0},
                {name: '丰台区', value: 226.1},
                {name: '大兴区', value: 150.7},
                {name: '通州区', value: 132.6},
                {name: '东城区', value: 90.9},
                {name: '西城区', value: 130.3},
                {name: '朝阳区', value: 384.1}
            ]
        }
    ]
};


export default class Chart4 extends React.Component {

    constructor(props){
        super(props);

    }


    fetch(params = {}){

    }



    componentDidMount(){


        var chartDom = this.refs.chart1;
        var myChart1 =Echarts.init(chartDom);
        myChart1.showLoading();

        request.get('./data/beijing.json')
            .end((err,res) =>{
                Echarts.registerMap('BJ',res.body);
                myChart1.setOption(chart4Option);
                myChart1.hideLoading();

            });


    }

    componentWillUnmount(){

    }



    render(){
        return(
            <div className="ant-row" style={{marginTop:20}}>


                <div className="console-title console-title-border">
                    <div className="pull-left">
                        <h5>北京16区县常住人口数量</h5>
                    </div>
                </div>


                <div className="ant-col-md-24" style={{height:600}} ref="chart1">

                </div>



            </div>
        )
    }
}