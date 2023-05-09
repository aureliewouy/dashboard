import React, { useState } from "react";

interface Task {
  id: number;
  description: string;
  done: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: Math.random(),
      description: "Send email to Robert",
      done: false,
    },
    {
      id: Math.random(),
      description: "User Testing",
      done: true,
    },
    {
      id: Math.random(),
      description: "Create new version",
      done: false,
    },
    {
      id: Math.random(),
      description: "Start the Campaign",
      done: false,
    },
  ]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleNewTaskDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTaskDescription(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskDescription.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        description: newTaskDescription,
        done: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskDescription("");
    }
  };

  const handleTaskDoneChange = (id: number) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div>
      <p style={{ marginTop: "-5px", color: "darkgrey", marginLeft: "3px" }}>
        {tasks.filter((task) => task.done).length} of {tasks.length} done
      </p>
      <ul style={{ padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ listStyleType: "none", lineHeight: 2.1 }}>
            <input
              type="checkbox"
              checked={task.done}
              style={{ transform: "scale(1.3)", marginRight: "10px" }}
              onChange={() => handleTaskDoneChange(task.id)}
            />
            <span
              style={{ textDecoration: task.done ? "line-through" : "none" }}
            >
              {task.description}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTaskDescription}
          onChange={handleNewTaskDescriptionChange}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </div>
  );
};

export default TaskList;
