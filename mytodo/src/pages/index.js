// index.js

import { useState } from 'react';
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1, // Generate unique id for each task
      TaskToBeAdded: taskName,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <main className="max-w-4xl mx-auto  mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <AddTask onAddTask={handleAddTask} />
      </div>
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  );
}
