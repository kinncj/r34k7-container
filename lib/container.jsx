'use strict';

import { Component } from 'react/addons';
import Dispatcher    from 'r34k7/dispatcher';
import Event         from 'r34k7/event';

class Container extends Component
{
    constructor(props) {
        super(props);
        this.state   = { visible: false };
        this.actions = ['open', 'close'];
    }

    componentDidMount() {
        this.actions.forEach(function(action){
            window.addEventListener(
                Event.mask.replace('%TARGET%', this.props.name).replace('%ACTION%', action),
                this[action].bind(this),
                false
            );
        }.bind(this));
    }

    componentWillUnmount() {
        this.actions.forEach(function(action){
            window.removeEventListener(
                Event.mask.replace('%TARGET%', this.props.name).replace('%ACTION%', action),
                this[action],
                false
            );
        }.bind(this));
    }

    open() {
        var eventName  = Event.mask.replace('%TARGET%', this.props.name).replace('%ACTION%', 'opened'),
            dispatcher = new Dispatcher();

        dispatcher.dispatch(eventName);

        this.setState({visible:true});
    }

    close() {
        var eventName  = Event.mask.replace('%TARGET%', this.props.name).replace('%ACTION%', 'closed'),
            dispatcher = new Dispatcher();

        dispatcher.dispatch(eventName);

        this.setState({visible:false});
    }

    render() {
        var style   = {},
            element = cloneElement(this.props.children, { onClick: this.onClick.bind(this) });

        if (!this.state.visible) {
            style.display = none;
        }

        return <div style={style}>{element}</div>;
    }
}

module.exports = Container;
