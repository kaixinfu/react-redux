import React, {Component} from 'react';
import Navbar from './Navbar'

class Sidebar extends Component {
    render() {
        console.log('render ======> Sidebar')
        return (
            <div>
                <p>
                    {`我是侧边栏`}
                </p>
                <Navbar />
            </div>
        );
    }
}

export default Sidebar;
