import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ filteredTodoList, todoList, setTodoList, timeInput }) {
  return (
    <div className="todo-list">
      {filteredTodoList.map((todo) => (
        <TodoItem
          todoList={todoList}
          setTodoList={setTodoList}
          key={todo.id}
          todo = {todo}
          timeInput = {timeInput}
        />
      ))}
    </div>
  );
}

export default TodoList;
