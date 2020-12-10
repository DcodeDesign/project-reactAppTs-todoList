import './TodoList.css';
import React from "react";
import {ITodo} from "../Itodo";
import TodoListRow from "./TodoListRow/TodoListRow";

class TodoList extends React.Component<any, any> {
    public rows: any[];
    constructor(props: ITodo) {
        super(props);
        this.rows = [];
    }

    taskElement(data: ITodo[]) {
        this.rows = [];
        let i = 0;
        data.forEach((task: ITodo) => {
            this.rows.push(<TodoListRow
                key={i++}
                task={task}/>)
            ;
        });
        return this.rows;
    }

    render() {
        const tasks = this.taskElement(this.props.tasks);
        return (
            <table>
                <tbody>
                   {tasks}
                </tbody>
            </table>
        );
    }
}

export default TodoList;
