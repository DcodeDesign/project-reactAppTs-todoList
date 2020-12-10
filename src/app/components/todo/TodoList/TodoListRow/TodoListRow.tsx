import React from 'react';
import './TodoListRow.css';
import {ITodo} from "../../Itodo";

class TodoListRow extends React.Component<any> {
    public _name: string;
    public _description: string;
    public _isFinished: boolean;
    public _textIsFinished: string;
    constructor(props: ITodo | undefined) {
        super(props);
        this._name = this.props.task.name;
        this._description = this.props.task.description;
        this._isFinished = this.props.task.isFinished;
        this._textIsFinished = this.isFinished()
    }

    public isFinished(): string {
        return this._isFinished ? 'Terminé' : 'En cours';
    }

    render() {
        return (
            <tr>
                <td>{this._name} - {this._description} ({this._textIsFinished})</td>
            </tr>
        );
    }
}

export default TodoListRow;
