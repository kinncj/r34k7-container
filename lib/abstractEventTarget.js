'use strict';

import AbstractMethodException from './abstractMethodException';

class AbstractEventTarget
{
    addEventListener() {
        throw new AbstractMethodException('Abstract method "addEventListener" must be implemented.');
    }

    removeEventListener() {
        throw new AbstractMethodException('Abstract method "removeEventListener" must be implemented.');
    }

    dispatchEvent() {
        throw new AbstractMethodException('Abstract method "dispatchEvent" must be implemented.');
    }
}

export default AbstractEventTarget
