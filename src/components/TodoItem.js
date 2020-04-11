import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../stores/TodoStore'

@observer
class TodoItem extends Component {

    onDelete = () => {
        store.delTodo(this.props.todo.id)
    }

    onToggle = () => {
        this.props.todo.toggle()
    }

    render() {
        const { todo } = this.props
        return (
            <li className={todo.completed ? 'completed' : ' '}>
                <div className="view">
                    <input
                        onChange={this.onToggle}
                        type="checkbox"
                        className="toggle"
                        value="on"
                        checked={todo.completed} />
                    <label>{todo.title}</label>
                    <button
                        onClick={this.onDelete}
                        className="destroy" />
                </div>
            </li>
        )
    }
}

export default TodoItem