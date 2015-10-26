'use strict';

import React       from 'react';
import Event       from './event';
import Dispatcher  from './dispatcher';
import EventTarget from './eventTarget';

class Container extends React.Component
{
    constructor(props, context) {
        super(props, context);

        this.state       = { visible: props.visible || false };
        this.actions     = ['open', 'close'];
        this.eventTarget = this.props.eventTarget || EventTarget;
    }

    componentDidMount() {
        this.actions.forEach(function(action){
            this.eventTarget.addEventListener(
                Event.mask.replace('%TARGET%', this.props.name).replace('%ACTION%', action),
                this[action].bind(this),
                false
            );
        }.bind(this));
    }

    componentWillUnmount() {
        this.actions.forEach(function(action){
            this.eventTarget.removeEventListener(
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
            dispatcher = new Dispatcher(this.props.eventTarget);

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
