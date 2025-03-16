import React, { useState, useEffect } from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    if (!task.name || !task.description)
      return alert("Both fields are required!");

    if (editingTask) {
      setTasks(
        tasks.map((t) =>
          t.id === editingTask.id
            ? { ...t, name: task.name, description: task.description }
            : t
        )
      );
      setEditingTask(null);
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          name: task.name,
          description: task.description,
          completed: false,
        },
      ]);
    }
  };

  const handleDeleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={handleAddTask} editingTask={editingTask} />
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export { ToDoApp };
