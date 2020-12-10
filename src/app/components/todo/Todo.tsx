import React, {ComponentLifecycle} from 'react';
import TodoFeild from "./TodoFeild/TodoFeild";
import TodoList from "./TodoList/TodoList";
import './Todo.css';

interface IProps {
    todo: Array<any>;
}

interface IState {
    textField: string;
    tasks: Array<any>
}


class Todo extends React.PureComponent<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            textField: '',
            tasks: this.props.todo
        }
        this.handleTextField = this.handleTextField.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

   /*
       shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {
            console.log(nextProps, nextState);
            return false;
        }
    */

    handleTextField(fieldText: string) {
        this.setState({textField: fieldText})
    }

    handleKeyPress(fieldText: string) {
        this.setState({textField: fieldText, tasks:[...this.state.tasks, fieldText]});
    }

    render() {
        const tasks = this.state.tasks;
        console.log(tasks);
        return (
            <div className={"container"}>
                <TodoFeild
                    textField={this.state.textField}
                    onTextField={this.handleTextField}
                    onKeyPress={this.handleKeyPress.bind(this)}
                />
                <TodoList tasks={tasks}/>
            </div>
        );
    }
}


export default Todo;
