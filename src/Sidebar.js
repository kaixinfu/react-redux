import React, {Component} from 'react';
import Navbar from './Navbar'

class Sidebar extends Component {
    render() {
        console.log('render ======> Sidebar')
        return (
            <div>
                <Navbar />
            </div>
        );
    }
}

export default Sidebar;
