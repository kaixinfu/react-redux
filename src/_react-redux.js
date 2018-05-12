import React, {Component} from 'react';
import PropTypes from 'prop-types'

//接受一个组件，赋给其状态和方法，并返回这个组件
export function connect() {

}

//将store注入到context中，使得任意组件都可以调用
class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);
        this.store = props.store
    }

    getChildContext() {
        return {store: this.store}
    }

    render() {
        console.log('render ======> Provider', this.store)
        return this.props.children
    }
}

export default Provider;
