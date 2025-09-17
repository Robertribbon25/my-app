import TaskItem from "./Taskitem";

function TaskList({ tasks, toggleDone, deleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks for today! 🎉</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
