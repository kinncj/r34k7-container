'use strict';

import React      from 'react';
import Event      from './event';
import Dispatcher from './dispatcher';

class Handler extends React.Component
{
    handle() {
        var eventName = Event.mask
                .replace('%TARGET%', this.props.target)
                .replace('%ACTION%', this.props.action),
            dispatcher = new Dispatcher(this.props.eventTarget);

        dispatcher.dispatch(eventName);
    }

    render() {
        return React.cloneElement(this.props.children, { 'onClick': this.handle.bind(this) });
    }
}

export default Handler;
