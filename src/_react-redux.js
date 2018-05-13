import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from './_redux'

//接受一个组件，赋给其状态和方法，并返回这个组件
//状态变化时，又能分发到组件
export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
    return class ConnectComponnet extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(props, context) {
            super(props, context);
            this.state = {
                props: {},

            }
        }

        componentDidMount() {
            const {store} = this.context
            //store每次状态变化都要去调动一下_update
            store.subscribe(() => this._update())
            this._update()
        }

        _update = () => {
            const {store} = this.context;
            const state = mapStateToProps(store.getState());
            const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
            console.log('_update =====> ', store)
            this.setState({
                props: {
                    ...this.state.props,
                    ...state,
                    ...dispatchProps
                }
            })
        }

        render() {
            return <WrapComponent {...this.state.props}/>
        }
    }
}

//将store注入到context中，使得任意组件都可以调用
class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    constructor(props, context) {
        console.log('props ==========> ',props)
        super(props, context);
        this.store = props.store
    }

    getChildContext() {
        return {store: this.store}
    }

    render() {
        return this.props.children
    }
}

export default Provider;
