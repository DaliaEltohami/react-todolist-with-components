import React from "react";
import "./App.css";
import ListTodos from "./components/ListTodos/ListTodos";
import AddTodo from "./components/AddTodo/AddTodo";

class App extends React.Component {
  state = {
    items: [
      { name: "dalia", todo: "study react", id: 1 },
      { name: "asser", todo: "study english", id: 2 },
      { name: "laila", todo: "study Arabic", id: 3 },
    ],
  };

  deleteItem = (id) => {
    const items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    this.setState({
      items: [...this.state.items, item],
    });
  };
  render() {
    return (
      <div className="container text-center">
        <h1 className="header">Todo React App</h1>
        <ListTodos
          items={this.state.items}
          deleteItem={this.deleteItem}
        ></ListTodos>
        <AddTodo addItem={this.addItem}></AddTodo>
      </div>
    );
  }
}

export default App;
