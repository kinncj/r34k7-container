'use strict';

import NoListenerException from './noListenerException';
import RuntimeException    from './runtimeException';
import AbstractEventTarget from './abstractEventTarget';

class EventTarget extends AbstractEventTarget
{
    constructor() {
        super();

        this._listeners = [];
    }

    addEventListener(eventName, callback) {
        if(!this._listeners[eventName]) {
            this._listeners[eventName] = [];
        }

        this._listeners[eventName].push(callback);
    }

    removeEventListener(eventName, callable) {
        if (!this._listeners[eventName] || this._listeners[eventName]) {
            throw new NoListenerException(`There's no listener for event "${eventName}".`, callback);
        }

        this._listeners[eventName].forEach(function(callback, index){
            if (callback == callable) {
                delete this._listeners[eventName][index];
            }
        }.bind(this));
    }

    dispatchEvent(event) {
        if (!(event instanceof Event)) {
            throw new RuntimeException(`Event expected; "${typeof event}" given.`);
        }

        let eventName = event.type;

        if (!this._listeners[eventName]) {
            return;
        }

        this._listeners[eventName].forEach(function(callback){
            console.log(callback);
            callback.apply(event);
        });
    }
}

export default new EventTarget();
