import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import { Table,Button,Modal,message,Upload, Icon, notification, Popconfirm, Tooltip } from 'antd';

class ReduxCom1 extends Component {


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
                        <h5>counter</h5>
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
                        onClick={this.asyncIncrement.bind(this)}

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
        onIncrement:() => {
            dispatch({type: 'INCREMENT_COUNTER'});
        },
        onDecrement:() => {
            dispatch({type: 'DECREMENT_COUNTER'});
        },
    }

};

ReduxCom1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCom1);

export default ReduxCom1;

