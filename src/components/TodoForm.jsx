import React, { useState } from "react";

export function TodoForm({ addTodo, filterTodo, setFilter }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    addTodo(newItem);
    setNewItem("");
  }

  return (
    <div>
      <form className="new-item-form">
        <div className="flex items-center mb-4">
          <svg
            className="h-8 w-8 text-pink-700 stroke-current mr-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h2 className="text-2xl font-semibold">Todo App</h2>
        </div>
        <div className="form-row">
          <label htmlFor="item"></label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter your task here" 
            className="p-2 border rounded focus:outline-none focus:border-gray-500 placeholder-pink-200"
          />
        </div>
        <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded" onClick={handleSubmit}>
          Add
        </button>

        <div className="mt-4">
          <select id="filter" onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </form>
    </div>
  );
}
