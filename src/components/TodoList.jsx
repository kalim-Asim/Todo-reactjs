import TodoCard from "./TodoCard";

export default function TodoList({ todos, setTodos }) {
  const deleteTodo = (indexToRemove) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(updatedTodos);
  };

  const editTodo = (indexToEdit, newValue) => {
    const updatedTodos = todos.map((todo, index) =>
      index === indexToEdit ? newValue : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="p-10">
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          todo={todo}
          deleteTodo={() => deleteTodo(index)}
          editTodo={(newValue) => editTodo(index, newValue)}
        />
      ))}
    </div>
  );
}