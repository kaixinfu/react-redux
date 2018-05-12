import React, {Component} from 'react';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types'

class Demo extends Component {
    static childContextTypes = {
        user: PropTypes.string
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
        console.log('render ======> deme')
        return (
            <div>
                <p>
                    {`我是${user}的demo`}
                </p>
                <Sidebar user={user}/>
            </div>
        );
    }
}

export default Demo;
