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
          className="mr-2 rounded-lg" 
        />
        <button className="bg-pink-400 hover:bg-pink-700 text-white font-bold text-sm py-1 px-2 rounded-full" onClick={() => { editTodo(id, editedTitle); setIsEditing(false); }} disabled={editedTitle.length === 0}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <span>{title}</span>
        <button className="flex p-1.5 bg-pink-400 rounded-md hover:rounded-lg hover:bg-pink-700 transition-all duration-300 text-white ml-2" onClick={() => setIsEditing(true)}> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      </>
    );
  }

  return (
    <li>
      <label className="flex items-center space-x-2"> 
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          disabled={isEditing}
        />
        <div className="flex items-center space-x-2"> 
          {todoContent}
          <button className="flex p-1.5 bg-pink-600 rounded-md hover:rounded-lg hover:bg-pink-700 transition-all duration-300 text-white" onClick={() => deleteTodo(id)}> {/* Add margin to the button */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
        </div>
      </label>
    </li>
  );
}
