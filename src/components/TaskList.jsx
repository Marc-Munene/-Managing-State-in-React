import React from "react";

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span>
            {task.name}: {task.description}
          </span>
          <button onClick={() => onToggleComplete(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => onEditTask(task)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export { TaskList };
