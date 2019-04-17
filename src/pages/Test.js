import React from 'react'
import {Button} from "antd";
import connect from 'react-redux/es/connect/connect'


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        testReducer: state.testReducer
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...ownProps,
        dispatch: dispatch
    }
};


class Test extends React.Component{
    render() {
        return (
            <div>
                <Button type={"primary"} onClick={e => this.test(e)}>
                    点我测试
                </Button>
                {
                    (
                        () => {
                            if(this.props.testReducer.result) {
                                return (
                                    <div>
                                        {this.props.testReducer.result}
                                    </div>
                                )
                            }
                        }
                    )()
                }
            </div>


        );
    }

    test(e) {
        this.props.dispatch({type: 'TEST.testSaga'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)