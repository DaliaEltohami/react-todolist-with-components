import React from "react";

class AddTodo extends React.Component {
  state = {
    name: "",
    todo: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      todo: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter Your Name..."
            id="name"
            onChange={(e) => this.handleChange(e)}
            value={this.state.name}
          ></input>
          <input
            type="text"
            placeholder="Enter Your Todo..."
            id="todo"
            onChange={(e) => this.handleChange(e)}
            value={this.state.todo}
          ></input>
          <input type="submit" value="Add Todo"></input>
        </form>
      </div>
    );
  }
}
export default AddTodo;
