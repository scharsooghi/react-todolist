import React, { Component } from 'react'

import TodoStore from "../stores/TodoStore"
import store from '../stores/TodoStore'

import { observer } from 'mobx-react'

@observer
class Filters extends Component {

    notCompleted = () => {

        let rest = TodoStore.todos.filter(x => x.completed === false)
        return rest.length

    }

    clear = () => {
        let comp = TodoStore.todos.filter(x => x.completed === true)

        for (let i = 0; i < comp.length; i++) {
            store.delTodo(comp.map(x => { return x.id })[i])
        }
    }

    showAll() {
        TodoStore.view = 0
    }

    showActive() {
        TodoStore.view = 1
    }

    showCompleted() {
        TodoStore.view = 2
    }


    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.notCompleted()}</strong> item left </span>

                <ul className="filters">
                    <li>
                        <a className={TodoStore.view === 0 ? "selected" : null} onClick={this.showAll}>All</a>
                    </li>
                    <li>
                        <a className={TodoStore.view === 1 ? "selected" : null} onClick={this.showActive}>Active</a>
                    </li>
                    <li>
                        <a className={TodoStore.view === 2 ? "selected" : null} onClick={this.showCompleted}>Completed</a>
                    </li>
                </ul>

                {TodoStore.todos.length - this.notCompleted() > 0 ?
                    <button onClick={this.clear} className="clear-completed">Clear completed</button> : null}

            </footer>
        )
    }
}

export default Filters