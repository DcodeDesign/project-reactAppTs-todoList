import React from "react";

class ChildElem extends React.Component<any, any> {
    private _text: string;
    constructor(props: any) {
        super(props);
        this._text = 'text';
    }
    render() {
        console.log('Child Component', this.props);
        return (
            <button onClick={this.props.clickHandler}>
                Add One More
            </button>
        );
    }
}
export {ChildElem};
