'use strict';

import { Component, cloneElement } from 'react/addons';
import Dispatcher                  from 'r34k7/dispatcher';
import Event                       from 'r34k7/event';

class Handler extends Component
{
    onClick() {
        var eventName = Event.mask
                .replace('%TARGET%', this.props.target)
                .replace('%ACTION%', this.props.action),
            dispatcher = new Dispatcher();

        dispatcher.dispatch(eventName);
    }

    render() {
        return cloneElement(this.props.children, { onClick: this.onClick.bind(this) });
    }
}

module.exports = Handler;
