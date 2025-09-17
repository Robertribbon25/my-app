function TaskItem({ task, toggleDone, deleteTask }) {
  return (
    <li style={{ textDecoration: task.done ? "line-through" : "none" }}>
      {task.name}
      <button onClick={() => toggleDone(task.id)}>✅</button>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;
