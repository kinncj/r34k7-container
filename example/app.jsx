'use strict';

import React                 from 'react/addons';
import { Button, Container } from '../dist/r34k7';

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
                    <Button target="container1" action="close">
                        <img src="http://icons.iconarchive.com/icons/hopstarter/plastic-mini/32/Button-Close-icon.png" />
                    </Button>
                    <h1>Xuplau</h1>
                </Container>
                <Button target="container1" action="open">
                    <a>Open 1</a>
                </Button>

                <Container name="container2">
                    <h1>Xuplau</h1>
                </Container>
                <Button target="container2" action="close">
                    <a>Close 2</a>
                </Button>
                <Button target="container2" action="open">
                    <a>Open 2</a>
                </Button>
            </div>
        );
    }
}

export default App;
