import React, {Component} from 'react';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types'
import _ from 'lodash';
import {Button, WhiteSpace, WingBlank} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import {addNum, reduceNum, waitAddNum} from './_action'
import {connect} from './_react-redux'

@connect(
    state => state,
    {addNum, reduceNum, waitAddNum}
)
class Demo extends Component {
    static contextTypes = {
        store: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {user: '开心'}
    }

    getChildContext() {
        return this.state
    }

    render() {
        if (_.isEmpty(this.props)) return null
        return (
            <div>
                <Sidebar num={this.props.reducer.num}/>
                <WhiteSpace/>
                <Button type="primary" onClick={() => this.props.addNum()} inline
                        style={{marginRight: '4px'}}>立即加一</Button>
                <Button type="primary" onClick={() => this.props.reduceNum()} inline
                        style={{marginRight: '4px'}}>立即减一</Button>
                <WhiteSpace/>
                <Button type="primary" onClick={() => this.props.waitAddNum()} inline
                        style={{marginRight: '4px'}}>延时加二</Button>
            </div>
        );
    }
}

export default Demo;
