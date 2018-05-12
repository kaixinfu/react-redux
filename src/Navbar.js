import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Navbar extends Component {
    // static contextTypes = {
    //     user: PropTypes.string
    // }

    render() {
        // console.log('render ======> Navbar', this.context)
        return (
            <div>
                <p>
                    {`我是的导航栏`}
                </p>
            </div>
        );
    }
}

export default Navbar;
