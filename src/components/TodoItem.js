import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function TodoItem({ setTodoList, todoList, todo, timeInput }) {
  const handleDelete = () => {
    setTodoList(todoList.filter((item) => item.id !== todo.id));
  };

  const handleCompete = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const listVariants = {
    hidden: {
      opacity: 0,
      x: -200,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="todo-item"
      >
        <div className="body">
          <h2
            style={
              todo.completed
                ? { color: "#727171", textDecoration: "line-through" }
                : { color: "black", textDecoration: "none" }
            }
          >
            <span className = "time">{todo.time}</span>{todo.text}
          </h2>
        </div>
        <div className="controls">
          <i
            className="far fa-check-circle icon-check"
            onClick={handleCompete}
            style={todo.completed ? { color: "green" } : { color: "#727171" }}
          ></i>
          <i
            className="far fa-trash-alt icon-delete"
            onClick={handleDelete}
          ></i>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TodoItem;
