import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState("");

  // Form submit krne k baad naya task add ho ga
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: { id: uuidv4(), text, completed: false },
      });
      setText(""); // jo bhiInput field ko clear krne k liye use ho ga
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new task"
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          className="bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
