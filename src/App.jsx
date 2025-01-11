import { useState } from 'react';
import Delete from './assets/Delete';
import Edit from './assets/Edit';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="h-screen w-full bg-slate-300">
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

function TodoInput({ todos, setTodos }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="flex w-full h-28 p-10">
      <input
        type="text"
        placeholder="Enter Todo..."
        value={input}
        onChange={handleInputChange}
        className="bg-stone-100 w-96 p-4 rounded-2xl focus:outline-none py-4"
      />
      <button
        onClick={handleAddTodo}
        className="mx-4 w-20 bg-slate-100 rounded-2xl"
      >
        Add
      </button>
    </div>
  );
}

function TodoList({ todos, setTodos }) {
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

const TodoCard = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(todo);

  const handleSave = () => {
    editTodo(inputValue);
    setIsEditing(false);
  };

  return (
    <div className="w-96 p-1 m-2 flex justify-between bg-stone-100 rounded-2xl">
      <div className="px-1">
        {isEditing ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-stone-100 w-full p-1 rounded focus:outline-none"
          />
        ) : (
          todo
        )}
      </div>
      <div className="flex">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-1 py-1 hover:cursor-pointer"
          >
            Save
          </button>
        ) : (
          <>
            <div
              onClick={deleteTodo}
              className="px-1 py-1 hover:cursor-pointer"
            >
              <Delete />
            </div>
            <div
              onClick={() => setIsEditing(true)}
              className="px-1 py-1 hover:cursor-pointer"
            >
              <Edit />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
