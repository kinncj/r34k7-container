'use strict';

class NoListenerException
{
    constructor(message, callback)
    {
        this.message  = message;
        this.callback = callback;
        this.name     = 'NoListenerException';
    }
}

export default NoListenerException;
