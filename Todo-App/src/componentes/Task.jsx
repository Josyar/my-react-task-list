import React, { useState } from 'react';

const Task = ({ name, initialState }) => {
  const [completed, setCompleted] = useState(initialState);

  const toggleCompletion = () => {
    setCompleted(!completed);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleCompletion}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name}
      </span>
    </div>
  );
};

export default Task;
