import { Droppable } from "@hello-pangea/dnd";
// import todoitesms
import TodoItem from "./TodoItem";

// ( TodoList jo sabhi todos tasks ko render karega )
const TodoList = ({ todos, dispatch }) => {
  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="space-y-2"
        >
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              dispatch={dispatch}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
