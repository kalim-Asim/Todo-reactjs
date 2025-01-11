import { useState } from 'react';
import Delete from '../assets/Delete';
import Edit from '../assets/Edit';
import Done from '../assets/Done';

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
              className="bg-stone-100 w-full  rounded focus:outline-none"
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
              <Done />
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

  export default TodoCard;
  