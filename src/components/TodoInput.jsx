import { useState } from "react";

export default function TodoInput({ todos, setTodos }) {
  const [input, setInput] = useState('');

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
        onChange={(e) => setInput(e.target.value)}
        className="bg-stone-100 w-96 px-4 text-1xl rounded-2xl focus:outline-none py-4"
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
