import React, { Component } from 'react'

import TodoItem from "./TodoItem"
import TodoStore from "../stores/TodoStore"
import Footer from "./Footer"

import { observer } from 'mobx-react'

@observer
class TodoItems extends Component {

    viewShow() {
        if (TodoStore.view === 0) {
            return TodoStore.todos
        } else if (TodoStore.view === 1) {
            return TodoStore.todos.filter(x => x.completed === false)
        } else if (TodoStore.view === 2) {
            return TodoStore.todos.filter(x => x.completed === true)
        }
    }

    render() {

        return (
            <section className="main">
                <ul className="todo-list">
                    {this.viewShow().map(todo => {
                        return (
                            <TodoItem todo={todo} />
                        )
                    })}
                </ul>
                <div>
                    {TodoStore.todos.length !== 0 ? <Footer /> : null}

                </div>
            </section>
        )
    }
}

export default TodoItems