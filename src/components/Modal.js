import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const modalVariant = {
  visible: {
    opacity: 1,
    y: 100,
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

function Modal({
  todoList,
  setTodoList,
  todoInput,
  setTodoInput,
  timeInput,
  setTimeInput,
  showModal,
  setShowModal,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        text: todoInput,
        completed: false,
        time: timeInput,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setTodoInput("");
    setShowModal((showModal) => !showModal);
  };

  const changeTimeInput = (e) => {
    setTimeInput(e.target.value);
  };

  return (
    <div>
      <AnimatePresence>
        {showModal && (
          <motion.form
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="form"
            onSubmit={handleSubmit}
          >
            <i
              className="fas fa-times close"
              onClick={() => setShowModal((showModal) => !showModal)}
            ></i>
            <input
              type="text"
              placeholder="Add task"
              onChange={(e) => setTodoInput(e.target.value)}
              value={todoInput}
              required
            />
            <div className="checkboxes">
              <label>
                <input
                  type="radio"
                  name="time"
                  value="daily"
                  onChange={changeTimeInput}
                />
                daily
              </label>
              <label htmlFor="weekly">
                <input
                  type="radio"
                  name="time"
                  value="weekly"
                  onChange={changeTimeInput}
                />
                weekly
              </label>
            </div>
            <button type="submit">ADD</button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Modal;
