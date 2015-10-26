# r34k7-container

A simple container for ReactJS.

```JavaScript
'use strict';

import React from 'react';
import {Container, Handler} from 'r34k7';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <Container name="container1">
                    <Handler target="container1" action="close">
                        <img src="your-icon.png" />
                    </Handler>
                    <h1>Xuplau</h1>
                </Container>
                <Handler target="container1" action="open">
                    <a>Open 1</a>
                </Handler>

                <Container name="container2">
                    <h1>Xuplau</h1>
                </Container>
                <Handler target="container2" action="close">
                    <a>Close 2</a>
                </Handler>
                <Handler target="container2" action="open">
                    <a>Open 2</a>
                </Handler>
            </div>
        );
    }
}

React.render(
    <App />,
    document.getElementById('content')
);
```

You can easily use the `window.EventTarget` as a Container prop.

```JavaScript
<Container eventTarget={theWindowEventTarget} />
```

Or implementing your own extending from `AbstractEventTarget`
