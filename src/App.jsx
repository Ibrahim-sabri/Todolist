import { useReducer, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { todoReducer } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import AddTodo from "./components/Addtodo";

function App() {
  // Reducer use kia gya hai todos ko manage krne k liye
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("todos");
    // return empty arry if not meet the condition
    return localData ? JSON.parse(localData) : [];
  });

  // localStorage main save krne k liye koi bhi changing ki malumat
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Drag and Drop functionality k liye function
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch({ type: "REORDER_TODOS", payload: items });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-gray-900 py-8 px-4">
      <div className="max-w-md  bg-gray-800 text-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">
          Todo List
        </h1>
        <AddTodo dispatch={dispatch} />
        <DragDropContext onDragEnd={onDragEnd}>
          <TodoList todos={todos} dispatch={dispatch} />
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
