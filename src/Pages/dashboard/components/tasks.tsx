import React, { useState } from "react";

interface Task {
  id: number;
  description: string;
  done: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: Date.now(),
      description: "Send email to Robert",
      done: false,
    },
    {
      id: Date.now(),
      description: "User Testing",
      done: true,
    },
    {
      id: Date.now(),
      description: "Create new version",
      done: false,
    },
    {
      id: Date.now(),
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
  console.log(tasks);
  return (
    <div>
      <p>
        {tasks.filter((task) => task.done).length} of {tasks.length} done
      </p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ listStyleType: "none" }}>
            <input
              type="checkbox"
              checked={task.done}
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
