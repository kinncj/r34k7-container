'use strict';

import React      from 'react/addons';
import Event      from './event';
import Dispatcher from './dispatcher';

class Container extends React.Component
{
    constructor(props) {
        super(props);
        this.state   = { visible: false };
        this.actions = ['open', 'close'];
    }

    componentDidMount() {
        this.actions.forEach(function(action){
            window.addEventListener(
                Event.mask.replace('%TARGET%', this.props.name).replace('%ACTION%', action),
                this[action].bind(this),
                false
            );
        }.bind(this));
    }

    componentWillUnmount() {
        this.actions.forEach(function(action){
            window.removeEventListener(
                Event.mask.replace('%TARGET%', this.props.name).replace('%ACTION%', action),
                this[action],
                false
            );
        }.bind(this));
    }

    open() {
        var eventName  = Event.mask.replace('%TARGET%', this.props.name).replace('%ACTION%', 'opened'),
            dispatcher = new Dispatcher();

        dispatcher.dispatch(eventName);

        this.setState({visible:true});
    }

    close() {
        var eventName  = Event.mask.replace('%TARGET%', this.props.name).replace('%ACTION%', 'closed'),
            dispatcher = new Dispatcher();

        dispatcher.dispatch(eventName);

        this.setState({visible:false});
    }

    render() {
        var style   = {};

        if (!this.state.visible) {
            style.display = 'none';
        }

        return <div style={style}>{this.props.children}</div>;
    }
}

export default Container;
