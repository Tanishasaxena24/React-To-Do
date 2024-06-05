// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask, editTask, toggleTask } from '../redux/taskSlice';

// const TaskList = () => {
//   const tasks = useSelector(state => state.tasks);
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(deleteTask(id));
//   };

//   const handleEdit = (id) => {
//     const newText = prompt('Edit task:');
//     if (newText.trim()) {
//       dispatch(editTask({ id, newText }));
//     }
//   };

//   const handleToggle = (id) => {
//     dispatch(toggleTask(id));
//   };

//   return (
//     <div id='list'>
//       {tasks.map(task => (
//         <li id='listItem' key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//           {task.text}
//           <div id='btn'>
//           <button id='markBtn' className='btn' onClick={() => handleToggle(task.id)}>Mark completed</button>
//           <button id='editBtn' onClick={() => handleEdit(task.id)}>Edit</button>
//           <button id='delBtn' onClick={() => handleDelete(task.id)}>Delete</button>
//           </div>
//         </li>
//       ))}
//     </div>
//   );
// };

// export default TaskList;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/taskSlice';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    const newText = prompt('Edit task:');
    if (newText.trim()) {
      dispatch(editTask({ id, newText }));
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span className="task-text">{task.text}</span>
          <div className="task-actions">
            <button className="task-button mark" onClick={() => handleToggle(task.id)}>Mark Completed</button>
            <button className="task-button edit" onClick={() => handleEdit(task.id)}>Edit</button>
            <button className="task-button delete" onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
