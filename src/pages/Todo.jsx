import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  function editTodo(id, newTitle) {
    const editedTodo = todos.map((todo) =>
      id === todo.id ? { ...todo, title: newTitle } : todo
    );
    setTodos(editedTodo);
  }

  function filterTodo() {
    switch (filter) {
      case "Active":
        return todos.filter((todo) => !todo.completed);
      case "Completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  return (
    <>
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <Link to="/">
        <button className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white font-bold transition-colors duration-200 bg-pink-500 border rounded-full gap-x-2 sm:w-auto hover:bg-pink-700 dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800">
          <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </button>
        </Link>
      </div>
      <TodoForm addTodo={addTodo} filterTodo={filterTodo} setFilter={setFilter} />
      <TodoList
        todos={filterTodo()}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default Todo;
