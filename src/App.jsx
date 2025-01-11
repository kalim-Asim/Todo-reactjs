import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="h-screen w-full bg-orange-200 flex justify-center">
      <div className="space-y-2">
        <TodoInput todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>

  );
};

export default App;
