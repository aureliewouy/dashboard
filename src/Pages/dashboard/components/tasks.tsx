import React, { useState } from "react";
import { ReactComponent as Remove } from "../../../medias/icons/remove.svg";
import styles from "./tasks.module.css";
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
      <p className={styles.counter}>
        {tasks.filter((task) => task.done).length} of {tasks.length} done
      </p>
      <ul style={{ padding: 0 }}>
        {tasks.map((task) => (
          <li
            className={styles.list}
            key={task.id}
            onClick={() => handleTaskDoneChange(task.id)}
          >
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={task.done}
              onChange={() => handleTaskDoneChange(task.id)}
            />
            <span className={task.done ? styles.done : ""}>
              {task.description}
            </span>
            <div
              style={{ display: "inline", cursor: "pointer" }}
              onClick={() => handleDeleteTask(task.id)}
            >
              <Remove className={styles.icon} />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.wrapperAdd}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add new todo"
          value={newTaskDescription}
          onChange={handleNewTaskDescriptionChange}
        />
        <button className={styles.btnAdd} onClick={handleAddTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskList;
