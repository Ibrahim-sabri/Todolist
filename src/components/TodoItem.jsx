// this willallows drag-and-drop functionality.
import { Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import { PencilIcon, TrashIcon, CheckIcon } from "@heroicons/react/24/solid";

const TodoItem = ({ todo, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      dispatch({ type: "EDIT_TODO", id: todo.id, newText: editText });
    }
    setIsEditing(false); //  ( Editing mode se bahar nikalne k lie
  };

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-700 text-white p-3 rounded-lg hover:shadow-lg transition-shadow w-full"
        >
          <div className="flex items-start w-full gap-2">
            {/*   checkbox jo task complete ya incomplete mark karega ) */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
              className="w-5 h-5 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <div className="flex-1 min-w-0">
              {isEditing ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full p-2 border rounded bg-gray-700 text-white outline-none"
                  autoFocus
                />
              ) : (
                <span
                  className={`block break-words ${
                    todo.completed ? "line-through text-gray-400" : "text-white"
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </div>
          </div>

          {/* ( Buttons for Edit, Delete, and Save ) */}
          <div className="flex gap-2 mt-2 md:mt-0 self-end md:self-center">
            {isEditing ? (
              <button
                onClick={handleEdit}
                className="text-green-400 hover:text-green-500"
              >
                <CheckIcon className="w-6 h-6" />
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-blue-400 hover:text-blue-500"
                >
                  <PencilIcon className="w-6 h-6" />
                </button>
                <button
                  onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
                  className="text-red-400 hover:text-red-500"
                >
                  <TrashIcon className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TodoItem;
