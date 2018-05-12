import React, {Component} from 'react';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import * as actions from './_action'

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
        const user = '开心';
        console.log('render ======> deme', actions)
        return (
            <div>
                {/*<Sidebar user={user}/>*/}
                <WhiteSpace />
                <Button type="primary" onPress={() => actions.addNum()} inline style={{ marginRight: '4px' }}>➕</Button>
                <Button type="primary" onPress={actions.reduceNum} inline style={{ marginRight: '4px' }}>➖</Button>
            </div>
        );
    }
}

export default Demo;
