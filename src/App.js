import React, { Component } from 'react';
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />        
      </div>
    );
  }
}
export default App;
