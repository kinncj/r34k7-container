'use strict';

import React      from 'react/addons';
import Event      from './event';
import Dispatcher from './dispatcher';

class Handler extends React.Component
{
    handle() {
        var eventName = Event.mask
                .replace('%TARGET%', this.props.target)
                .replace('%ACTION%', this.props.action),
            dispatcher = new Dispatcher();

        dispatcher.dispatch(eventName);
    }

    render() {
        return React.cloneElement(this.props.children, { 'onClick': this.handle });
    }
}

export default Handler;
