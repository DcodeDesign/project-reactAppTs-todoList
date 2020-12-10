import React from 'react';
import './TodoFeild.css';

class TodoFeild extends React.Component<any, any> {
    public _onTextField: any;
    public _onKeyPress: any;
    constructor(props: any) {
        super(props);
        this._onTextField = this.props.onTextField;
        this._onKeyPress = this.props.onKeyPress;
        this.handleTextField = this.handleTextField.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleTextField(e: { target: { value: string; }; }): void {
        this._onTextField(e.target.value)
    }

    // @ts-ignore
    handleKeyPress (event){
        if(event.key === 'Enter'){
            this._onKeyPress({name : event.target.value, description: "", isFinished: false});
        }
    }

    render() {
        const {fieldText} =this.props
        return (
            <label htmlFor={"textField"}>
                <input
                    type={"text"}
                    id={"textField"}
                    name={"textField"}
                    placeholder={"Créer un tâches"}
                    value={fieldText}
                    onChange={this.handleTextField}
                    onKeyPress={this.handleKeyPress}
                />
            </label>
        );
    }
}

export default TodoFeild;
