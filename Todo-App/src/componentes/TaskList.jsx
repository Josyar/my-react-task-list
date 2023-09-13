import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task name={task.name} initialState={task.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
