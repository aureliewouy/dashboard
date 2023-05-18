import React, { useState } from "react";
import { ReactComponent as Remove } from "../../../medias/icons/trash.svg";
import { ReactComponent as Close } from "../../../medias/icons/close.svg";
import styles from "./tasks.module.css";
import trash from "../../../medias/icons/delete.png";
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
      description: "Create V2",
      done: false,
    },
    {
      id: Math.random(),
      description: "Start a new campaign",
      done: false,
    },
  ]);
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [taskToDelete, setTaskToDelete] = useState<Task>(tasks[0]);

  const [isOpen, setIsOpen] = useState(false);
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

  const handleIconClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <p className={styles.counter}>
        {tasks.filter((task) => task.done).length} of {tasks.length} done
      </p>
      <ul style={{ padding: 0 }}>
        {tasks.map((task) => (
          <li className={styles.list} key={task.id}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={task.done}
              onChange={() => handleTaskDoneChange(task.id)}
            />
            <span
              className={task.done ? styles.done : ""}
              onClick={() => handleTaskDoneChange(task.id)}
            >
              {task.description}
            </span>
            <div
              className={styles.trashWrapper}
              onClick={() => {
                setTaskToDelete(task);
                handleIconClick();
              }}
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
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={handleClose}>
              <Close />
            </span>
            <img src={trash} alt="trash" style={{ width: "50px" }} />
            <h2
              style={{
                marginTop: "7%",
                marginLeft: "10%",
                textAlign: "center",
              }}
            >
              Are you sure ?
            </h2>
            <p className={styles.description}>
              Do you really want to delete this task ?
              <span> {taskToDelete.description}</span>
            </p>
            <div className={styles.btnWrapper}>
              <div
                className={styles.btnYes}
                onClick={() => {
                  handleDeleteTask(taskToDelete.id);
                  handleClose();
                }}
              >
                <p>Yes</p>
              </div>
              <div className={styles.btnNon}>
                <p>No</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
