'use strict';

class AbstractMethodException
{
    constructor(message)
    {
        this.message = message;
        this.name    = 'AbstractMethodException';
    }
}

export default AbstractMethodException;
