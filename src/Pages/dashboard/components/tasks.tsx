import React, { useState } from "react";
import { ReactComponent as Remove } from "../../../medias/icons/trash.svg";
import { ReactComponent as Close } from "../../../medias/icons/close.svg";
import { ReactComponent as Trash } from "../../../medias/icons/delete.svg";
import { ReactComponent as Left } from "../../../medias/icons/left.svg";
import { ReactComponent as Right } from "../../../medias/icons/right.svg";
import styles from "./tasks.module.css";
import { TasksData } from "../../../utils/fakeData/salesData";

export interface Task {
  id: number;
  description: string;
  done: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(TasksData);
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [taskToDelete, setTaskToDelete] = useState<Task>(tasks[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const maxLength = 100;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  const handleChangeInputTodo = (event: any) => {
    const enteredValue = event.target.value;
    if (enteredValue.length <= maxLength) {
      setInputValue(enteredValue);
    }
  };
  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = tasks.slice(startIndex, endIndex);

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
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      const enteredText = event.target.value;
      setNewTaskDescription(enteredText);
      handleAddTask();
    }
  };

  return (
    <div>
      <p className={styles.counter}>
        {tasks.filter((task) => task.done).length} of {tasks.length} done
      </p>
      <ul className={styles.listWrapper}>
        {visibleItems.map((task) => (
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
        {totalPages > 1 && (
          <div className={styles.navigationWrapper}>
            <button onClick={handlePrev} disabled={startIndex === 0}>
              <Left />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex > tasks.length - itemsPerPage}
            >
              <Right />
            </button>
          </div>
        )}
      </ul>
      <div className={styles.wrapperAdd}>
        <input
          className={
            inputValue.length === maxLength ? styles.inputError : styles.input
          }
          type="text"
          onKeyDown={handleKeyPress}
          placeholder="Add new todo"
          value={newTaskDescription}
          maxLength={maxLength}
          onChange={(e) => {
            handleNewTaskDescriptionChange(e);
            handleChangeInputTodo(e);
          }}
        />
        <button className={styles.btnAdd} onClick={handleAddTask}>
          Add
        </button>
      </div>
      {inputValue.length === maxLength && (
        <p className={styles.errorMsg}>
          Ne dépassez pas {maxLength} caractères.
        </p>
      )}
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={handleClose}>
              <Close />
            </span>
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Trash style={{ width: "75px" }} />
            </div>
            <h2 className={styles.sure}>Are you sure ?</h2>
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
              <div className={styles.btnNon} onClick={handleClose}>
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
