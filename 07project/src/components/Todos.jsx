import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState('');

  const handleEdit = (id) => {
    dispatch(editTodo({ id, text: editedText }));
    setEditedText('');
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="mr-2 p-1 border rounded"
              placeholder="Edit text"
            />
            <button
              onClick={() => handleEdit(todo.id)}
              className="text-white bg-green-500 border-0 py-1 px-2 focus:outline-none hover:bg-green-600 rounded text-md"
            >
              Save
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
