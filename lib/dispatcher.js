'use strict';

import Event from 'r34k7/event';

class Dispatcher
{
    constructor(eventTarget) {
        if((eventTarget instanceof EventTarget) === false) {
            eventTarget = window;
        }

        this.eventTarget = eventTarget;
    }

    dispatch(event) {
        if(typeof event === 'string' ) {
            event = new Event(event);
        }

        this.eventTarget.dispatchEvent(event);

        window.dispatchEvent(new Event(Event.name + '.dispatcher.dispatched'));
    }
}

module.exports = Dispatcher;
