import React from "react";
import {ParentElem} from "./ParentElem/ParentElem";
import {ChildElem} from "./ChildElem/ChildElem";

export class ChildToParent extends React.Component<any, any> {
    render() {
        return (
            <React.Fragment>
                <ParentElem />
            </React.Fragment>
        );
    }
}
