import React, {ComponentLifecycle} from "react";
import {ChildElem} from "../ChildElem/ChildElem";

interface Component<P = {}, S = {}> extends ComponentLifecycle<P, S> { }
export class ParentElem extends React.Component<{}, { count: number }>  {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };

        this.outputEvent = this.outputEvent.bind(this);
    }

    outputEvent(event: any) {
        // the event context comes from the Child
        console.log('outputEvent', event.target);
        this.setState((state, props) => ({count: this.state.count + 1}));

    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <ChildElem clickHandler={this.outputEvent}/>
            </div>
        );
    }
}
