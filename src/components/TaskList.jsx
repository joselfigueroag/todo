import { useState } from "react";
import Form from "./Form";
import Task from "./Task";
import "../styles/TaskList.css";

function TaskList() {
  let [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      let tasksTemp = [task, ...tasks];
      setTasks(tasksTemp);
    }
  };

  const deleteTask = (id) => {
    const tasksTemp = tasks.filter((task) => task.id !== id);
    setTasks(tasksTemp);
  };

  const completeTask = (id) => {
    const tasksTemp = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksTemp);
  };

  return (
    <>
      <Form onSubmit={addTask} />
      <div className="list-container">
        {tasks.map((item) => {
          return (
            <Task
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </>
  );
}

export default TaskList;
