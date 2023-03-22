import './App.css';
import React, {useState} from 'react';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div >
      <h1>TODO App</h1>
      <input className='inp' 
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Enter a task"
      />
      <button className='btn1' onClick={addTask}><i class="fa-solid fa-plus"></i></button>

      {tasks.map((task, index) => (
        <div className='list' key={index}>
          <input className='inp2'
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompleted(index)}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.task}
          </span>
          <button className='btn2' onClick={() => deleteTask(index)}>✂</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
