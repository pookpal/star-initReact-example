import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Table,Button,Modal,message,Upload, Icon, notification, Popconfirm, Tooltip } from 'antd';



class ReduxCom2 extends Component {


    constructor(props){
        super(props);
    }

    asyncIncrement() {
        let {  onIncrement } = this.props;
        setTimeout(function(){
            onIncrement()
        },2000);
    }

    render() {

        const { counterValue, onIncrement, onDecrement } = this.props;


        return (


            <div className="ant-row" style={{marginTop:20}}>


                <div className='console-title-border console-title'>
                    <div className="pull-left">
                        <h5>redux1</h5>
                    </div>
                </div>



                <div style={{ marginBottom: 16 }} className="btn-group">



                    <Button
                        onClick={onIncrement}
                    >
                        +1
                    </Button>

                    <Button
                        onClick={onDecrement}

                    >
                        -1
                    </Button>

                    <Button


                    >
                        延时+2
                    </Button>

                </div>

                <div>
                    {counterValue}
                </div>

            </div>


        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        counterValue: state.counter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {



    }

};

ReduxCom2 = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCom2);

export default ReduxCom2;

