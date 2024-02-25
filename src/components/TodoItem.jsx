import { useState } from "react";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <button className="bg-purple-300 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-full" onClick={() => { editTodo(id, editedTitle); setIsEditing(false); }} disabled={editedTitle.length === 0}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {title}
        <button className="bg-purple-300 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {todoContent}
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </label>
    </li>
  );
}