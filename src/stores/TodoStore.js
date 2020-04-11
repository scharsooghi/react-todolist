import { observable , action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
    lastID = 0
    @observable todos = []
    @observable view = 0

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID ++))
    }

    @action
    delTodo(id) {
        var index = this.todos.map(x => {
            return x.id;
          }).indexOf(id);
          this.todos.splice(index, 1);
    }


}

const store = new TodoStore()
export default store