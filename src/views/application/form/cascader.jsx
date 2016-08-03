import React, {Component} from 'react';
import {Form, Cascader, Rate, TreeSelect} from 'antd';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const FormItem = Form.Item;

const treeData = [{
    label: '节点一',
    value: '0-0',
    key: '0-0',
    children: [{
        label: '子节点一',
        value: '0-0-0',
        key: '0-0-0',
    }, {
        label: '子节点二',
        value: '0-0-1',
        key: '0-0-1',
    }],
}, {
    label: '节点二',
    value: '0-1',
    key: '0-1',
    children: [{
        label: '子节点三',
        value: '0-1-0',
        key: '0-1-0',
    }, {
        label: '子节点四',
        value: '0-1-1',
        key: '0-1-1',
    }],
}];
class Cascader1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 3,
            count: null,
            value: ['0-0-0'],
        }
    }

    handleChange(value) {
        this.setState({ value1:value });
    }

    onChange(value) {
        console.log('onChange ', value, arguments);
        this.setState({ value });
    }

    render() {
        const options = [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖'
                }]
            }]
        }, {
            value: 'jiangsu',
            label: '江苏',
            children: [{
                value: 'nanjing',
                label: '南京',
                children: [{
                    value: 'zhonghuamen',
                    label: '中华门'
                }]
            }]
        }];

        const { value1 } = this.state;


        const tProps = {
            treeData,
            value: this.state.value,
            onChange: this.onChange.bind(this),
            multiple: true,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            searchPlaceholder: '请选择',
            style: {
                width: 300,
            },
        };

        return (

            <div className="ant-row" style={{marginTop:20}}>


                <div className='console-title-border console-title'>
                    <div className="pull-left">
                        <h5>表单系列</h5>
                    </div>
                </div>



                <Form horizontal>
                    <FormItem

                        label="地区级联"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}
                    >
                        <Cascader
                            allowClear={false}
                            options={options}
                            defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                            placeholder="请选择地区"
                        />

                    </FormItem>



                    <FormItem

                        label="评分"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}
                    >

                     <Rate onChange={this.handleChange.bind(this)} value={this.state.value1} />
                           {value1 && <span className="ant-rate-text">{value1} 星</span>}


                    </FormItem>

                    <FormItem

                        label="树选择"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}
                    >

                        <TreeSelect {...tProps} />

                    </FormItem>




                </Form>





            </div>
        );
    }
}
export default Cascader1;