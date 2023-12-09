import React from "react";

const ListTodos = (props) => {
  const { items } = props;
  const { deleteItem } = props;
  const listItems = items.map((item) => {
    return (
      <div key={item.id}>
        <span className="name">{item.name}</span>
        <span className="todo">{item.todo}</span>
        <span onClick={() => deleteItem(item.id)} className="action icon">
          &times;
        </span>
      </div>
    );
  });
  return (
    <div className="todo-list">
      <div className="list-header">
        <span className="name title">Name</span>
        <span className="todo title">Todo</span>
        <span className="action title">Action</span>
      </div>
      {items.length > 0 ? listItems : <p>Theres Is No Todos To Show</p>}
    </div>
  );
};

export default ListTodos;
