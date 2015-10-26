'use strict';

import EventConfiguration  from './eventConfiguration';
import AbstractEventTarget from './abstractEventTarget';
import EventTarget         from './eventTarget';

class Dispatcher
{
    constructor(eventTarget) {
        if((eventTarget instanceof window.EventTarget) === false && (eventTarget instanceof AbstractEventTarget) === false) {
            eventTarget = EventTarget;
        }

        this.eventTarget = eventTarget;
    }

    dispatch(event) {
        if(!(event instanceof Event)) {
            event = new Event(event);
        }

        this.eventTarget.dispatchEvent(event);
        this.eventTarget.dispatchEvent(new Event(EventConfiguration.name + '.dispatcher.dispatched'));
    }
}

export default Dispatcher;
