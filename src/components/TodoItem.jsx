// TodoItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="d-flex flex-column flex-sm-row align-items-center justify-content-between border-bottom py-2 gap-4">
      <div className="d-flex align-items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}.
        </span>
        <span className={`mr-4 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className="d-flex gap-3 ml-8">
        <button
          className="btn btn-sm btn-primary mr-2 px-1 py-1"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="btn btn-sm btn-danger mr-2 px-1 py-1"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="btn btn-sm btn-success px-1 py-1"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="btn btn-sm btn-warning px-1 py-1"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
