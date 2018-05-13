import React, {Component} from 'react';
import Navbar from './Navbar'

class Sidebar extends Component {
    render() {
        console.log('render ======> Sidebar')
        return (
            <div>
                <div>{`${this.props.num}`}</div>
                <Navbar />
            </div>
        );
    }
}

export default Sidebar;
