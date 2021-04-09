import React, { useState } from "react";
import Filter from "./components/Filter";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";
import { motion } from "framer-motion";

const textVariant = {
  visible: {
    opacity: 1,
    y: 50,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [timeInput, setTimeInput] = useState("all");
  const [time, setTime] = useState("all");
  const [filteredTodoList, setfilteredTodoList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <Filter
        setfilteredTodoList={setfilteredTodoList}
        filteredTodoList={filteredTodoList}
        todoList={todoList}
        time={time}
        setTime={setTime}
        timeInput={timeInput}
        setTimeInput={setTimeInput}
      />
      <Modal
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todoList={todoList}
        setTodoList={setTodoList}
        time={time}
        setTime={setTime}
        showModal={showModal}
        setShowModal={setShowModal}
        timeInput={timeInput}
        setTimeInput={setTimeInput}
      />
      <div className="list-container">
        {todoList.length === 0 ? (
          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            you finished all your tasks!
          </motion.h1>
        ) : (
          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            TASKS:
          </motion.h1>
        )}
        <div
          className="add"
          onClick={() => setShowModal((showModal) => !showModal)}
        >
          <i className="fas fa-plus"></i>
        </div>
        <div className="todo-list">
          <TodoList
            filteredTodoList={filteredTodoList}
            setfilteredTodoList={setfilteredTodoList}
            setTodoList={setTodoList}
            todoList={todoList}
            key={todoList.id}
            timeInput={timeInput}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
