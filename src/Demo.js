import React, {Component} from 'react';

class Demo extends Component {
    render() {
        const user = '开心';
        return (
            <div>
                <p>
                    {`我是${user}`}
                </p>
            </div>
        );
    }
}

export default Demo;
