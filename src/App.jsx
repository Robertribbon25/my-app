import { useState } from "react";
import Header from "./Header";
import TaskForm from "./Taskform";
import TaskList from "./Tasklist";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTask = {
      id: Date.now(), // unique id
      name,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
