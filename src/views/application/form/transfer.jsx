import React, {Component} from 'react';
import {Breadcrumb ,Transfer, Button, Progress, Row, Col, Tag,Timeline,Tree,Steps } from 'antd';

const Step = Steps.Step;

const TreeNode = Tree.TreeNode;
let index = 3;
const steps = [{
    title: '已完成',
    description: '这里是多信息的描述啊',
}, {
    title: '进行中',
    description: '这里是多信息的耶哦耶哦哦耶哦耶',
}, {
    title: '又一个待运行',
    description: '描述啊描述啊',
}, {
    title: '待运行',
    description: '这里是多信息的描述啊',
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

export default class Transfer1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mockData: [],
            targetKeys: [],
            tags: [
                { key: 1, name: '不可移除' },
                { key: 2, name: '标签二' },
                { key: 3, name: '标签三' }
            ],
            keys: ['0-0-0', '0-0-1'],
            defaultExpandedKeys: ['0-0-0', '0-0-1'],
            defaultSelectedKeys: ['0-0-0', '0-0-1'],
            defaultCheckedKeys: ['0-0-0', '0-0-1']
        };

    }

    onSelect(info) {
        console.log('selected', info);
    }
    onCheck(info) {
        console.log('onCheck', info);
    }

    handleClose(key) {
        const tags = [...this.state.tags].filter(tag => (tag.key !== key) && tag);
        console.log(tags);
        this.setState({ tags });
    }
    addTag() {
        const tags = [...this.state.tags];
        index += 1;
        tags.push({ key: index, name: `新标签${index}` });
        this.setState({ tags });
    }

    omponentDidMount() {
        this.getMock();
    }

    getMock() {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i,
                title: `内容${i + 1}`,
                description: `内容${i + 1}的描述`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({ mockData, targetKeys });
    }

    handleChange(targetKeys) {
        this.setState({ targetKeys });
    }

    renderFooter() {
        return (
            <Button type="ghost" size="small" style={{ float: 'right', margin: 5 }}
                    onClick={this.getMock.bind(this)}
            >
                刷新
            </Button>
        );
    }

    render() {

        const { tags } = this.state;

        return (

            <div className="ant-row" style={{marginTop:20}}>


                <div className='console-title-border console-title'>
                    <div className="pull-left">
                        <h5>穿梭框</h5>
                    </div>
                </div>

                <Transfer
                    dataSource={this.state.mockData}
                    showSearch
                    listStyle={{
                      width: 250,
                      height: 300
                    }}
                    operations={['向右操作文案', '向左操作文案']}
                    targetKeys={this.state.targetKeys}
                    onChange={this.handleChange.bind(this)}
                    render={item => `${item.title}-${item.description}`}
                    footer={this.renderFooter.bind(this)}
                />


                <div style={{marginTop:50}}>
                    <Row>
                        <Col span={8}>

                            <Progress percent={30} />
                            <Progress percent={50} status="active" />
                            <Progress percent={70} status="exception" />
                            <Progress percent={100} />
                            <Progress percent={50} showInfo={false} />
                        </Col>

                    </Row>
                 </div>


                <div style={{marginTop:50}}>
                    <Row>
                        <Col span={3}>
                            <Progress  type="circle" percent={30}  />

                         </Col>
                        <Col span={3}>

                            <Progress type="circle" percent={70}  status="exception" />

                        </Col>
                        <Col span={3}>

                            <Progress type="circle" percent={100} />
                        </Col>
                    </Row>
                </div>

                <div style={{marginTop:50}}>
                    {tags.map(tag =>
                        <Tag key={tag.key} closable={tag.key !== 1} afterClose={() => this.handleClose(tag.key)}>
                            {tag.name}
                        </Tag>
                    )}
                    <Button size="small" type="dashed" onClick={this.addTag.bind(this)}>+ 添加标签</Button>

                </div>


                <div style={{marginTop:50}}>
                    <Timeline>
                        <Timeline.Item color="green">创建服务现场 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">创建服务现场 2015-09-01</Timeline.Item>
                        <Timeline.Item color="red">
                            <p>初步排除网络异常1</p>
                            <p>初步排除网络异常2</p>
                            <p>初步排除网络异常3 2015-09-01</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <p>技术测试异常1</p>
                            <p>技术测试异常2</p>
                            <p>技术测试异常3 2015-09-01</p>
                        </Timeline.Item>
                    </Timeline>
                </div>



                <div style={{marginTop:50}}>
                    <Tree className="myCls" showLine checkable
                          defaultExpandedKeys={this.state.defaultExpandedKeys}
                          defaultSelectedKeys={this.state.defaultSelectedKeys}
                          defaultCheckedKeys={this.state.defaultCheckedKeys}
                          onSelect={this.onSelect} onCheck={this.onCheck}
                    >
                        <TreeNode title="parent 1" key="0-0">
                            <TreeNode title="parent 1-0" key="0-0-0" disabled>
                                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                                <TreeNode title="leaf" key="0-0-0-1" />
                            </TreeNode>
                            <TreeNode title="parent 1-1" key="0-0-1">
                                <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
                            </TreeNode>
                        </TreeNode>
                    </Tree>

                </div>


                <div style={{marginTop:50,marginBottom:100}}>
                    <Row>
                        <Col span="12">
                            <Steps current={1}>{steps}</Steps>
                        </Col>
                    </Row>


                </div>








            </div>
        );
    }
}
