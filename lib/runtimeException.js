'use strict';

class RuntimeException
{
    constructor(message)
    {
        this.message = message;
        this.name    = 'RuntimeException';
    }
}

export default RuntimeException;
