import React, { Component, PropTypes } from 'react';

import { Table,Button,Modal,message,Upload, Icon, notification, Popconfirm, Tooltip } from 'antd';

import Progress from "../../../components/Lib/ReactProcessLoadingBar";

import request from 'superagent';




function open(){
    console.log('111');
}
function confirm() {
    message.success('点击了确定');
}

function cancel() {
    message.error('点击了取消');
}
// 表格的列控制
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        sorter: true,
        render: function(name){
            let nameStr =name.first +' '+ name.last;
            return(
                <Tooltip title={nameStr}>
                    <a>{name.first} {name.last + '...'}</a>
                </Tooltip>
            );
        },
        width: '25%',
    },
    {
        title: '性别',
        dataIndex: 'gender',
        filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female'}
        ],
        width: '25%',
    },
    {
        title: '邮箱',
        dataIndex: 'email'
    },
    {
        title: '操作',
        dataIndex: 'operate',
        render:function(){
            return (
                <span>
                    <a >查看  </a>
                    <a >编辑  </a>
                    <Popconfirm title="确定要删除这个任务吗？" onConfirm={confirm} onCancel={cancel}>
                        <a href="#">删除</a>
                    </Popconfirm>
                </span>
            )
        } ,
        width: '25%'
    }


];


// 通过 rowSelection 对象表明需要行选择
const rowSelection = {

    onChange(selectedRowKeys, selectedRows) {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },

    onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
    },

    onSelectAll(selected, selectedRows, changeRows) {

        console.log(selected, selectedRows, changeRows);
    }
};



// 上传视频的props

const videoProps = {

    name: 'file',

    action: '/upload.do',

    headers: {
        authorization: 'authorization-text'
    },

    showUploadList:false,

    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success('上传视频成功');
        } else if (info.file.status === 'error') {
            message.error('上传视频失败');
        }
    }
};


const openNotification = function () {
    const args = {
        message: '这是标题',
        description: '我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭',
        duration: 0,
    };
    notification.open(args);
};


const openNotificationWithIcon = function (type) {
    return function () {
        notification[type]({
            message: '这是标题',
            description: '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案',
        });
    };
};

export default class ContentLists extends Component {


    constructor(props){

        super(props);

        this.state = {
            data: [],
            pagination: {
                showQuickJumper:true,
                showSizeChanger:true,
                pageSizeOptions:['10', '20', '50', '100']
            },
            loading: false,
            loading1: false,
            visible: false

        };
    }



    handleTableChange(pagination, filters, sorter) {

        const pager = this.state.pagination;

        pager.current = pagination.current;

        this.setState({
            pagination: pager
        });

        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters
        });
    }

    fetch(params = {}) {
        Progress.show();
        this.setState({ loading: true });
        request
            .get('http://api.randomuser.me')
            .query({
                results: 10,
                ...params
            })
            .end((err,res) => {
                const pagination = this.state.pagination;
                // Read total count from server
                // pagination.total = data.totalCount;
                pagination.total = 200;
                this.setState({
                    loading: false,
                    data: res.body.results,
                    pagination
                });
                Progress.hide();
            });



    }

    addVideo(){
        console.log('hello world');
    }

    injectSuccess(){
        Modal.success({
            title: '已经开始扫描文件夹'
        });
    }

    injectError(){
        Modal.error({
            title: '扫描文件夹失败'
        });
    }

    showModal() {
        this.setState({
            visible: true
        });
    }

    handleOk() {
        this.setState({ loading1: true });
        setTimeout(() => {
            this.setState({ loading1: false, visible: false });
            console.log('ok');
            openNotification();
        }, 2000);
    }

    handleCancel() {
        this.setState({ visible: false });
    }

    componentDidMount() {
        this.fetch();
    }

    render() {


        return (


            <div className="ant-row" style={{marginTop:20}}>


                <div className='console-title-border console-title'>
                    <div className="pull-left">
                        <h5>内容</h5>
                    </div>
                </div>



                <div style={{ marginBottom: 16 }} className="btn-group">

                    <span>
                        <Upload {...videoProps} >
                            <Button type="primary">
                                <Icon type="upload" /> 添加视频
                            </Button>
                        </Upload>
                    </span>

                    <Button

                        onClick={this.injectError.bind(this)}
                    >
                        扫描表情文件夹
                    </Button>

                    <Button

                        onClick={this.injectSuccess.bind(this)}
                    >
                        扫描高清文件夹
                    </Button>



                    <Button
                        onClick={this.showModal.bind(this)}
                    >
                        直接注入
                    </Button>

                    <Button

                        onClick={openNotificationWithIcon('success')}
                    >
                        测试通知提醒框
                    </Button>



                </div>


                <Table columns={columns}
                           rowSelection={rowSelection}
                           rowKey={record => record.registered}
                           dataSource={this.state.data}
                           pagination={this.state.pagination}
                           loading={this.state.loading}
                           onChange={this.handleTableChange.bind(this)}
                           bordered
                           footer={()=>'共有'+this.state.pagination.total+'条记录'}
                />


                <Modal ref="modal"
                       visible={this.state.visible}
                       title="对话框标题" onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
                       footer={[
                        <Button key="back" type="ghost" size="large" onClick={this.handleCancel.bind(this)}>返 回</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.loading1} onClick={this.handleOk.bind(this)}>
                          提 交
                        </Button>,
                         ]}
                >
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                </Modal>






            </div>


        );
    }


}



