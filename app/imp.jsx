'use client'

import React, { useState} from "react";
import AddTaskForm from "@/components/AddTaskForm";
import TaskList from "@/components/Tasklist";

const TaskWave = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, title) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const getCompletedTasks = () => tasks.filter((task) => task.completed);
  const getRemainingTasks = () => tasks.filter((task) => !task.completed);

  return (
      <div className="flex flex-col space-y-6 w-[600px] md:w-[100%] z-10 p-4">
        <div className=" w-full flex items-center justify-between">
          <h1 className=" uppercase text-4xl font-bold text-black tracking-widest md:text-3xl">
            {/* Task Manager */}
            My Tasks
          </h1>
        </div>
        <div className=" shadow-lg  shadow-violet-300">
          <AddTaskForm onAddTask={addTask} />
        </div>
        <div
          className="w-full h-[400px] md:h-[500px] px-2 overflow-y-scroll rounded-md shadow-violet-500 shadow-lg relative transition-all duration-500">
          <div
            className="w-full overflow-hidden mb- sticky top-0 flex items-center justify-between text-gray-500 border-b"
          >
            <p className=" text-gray-500 px-2 py-3">
              {getRemainingTasks().length} tasks left{" "}
            </p>
            <button onClick={clearTasks}>Clear all tasks</button>
          </div>

          {tasks.length ? (
            <TaskList
              tasks={tasks}
              onEditTask={editTask}
              onDeleteTask={deleteTask}
              onToggleCompleted={toggleCompleted}
            />
          ) : (
            <div className=" w-full h-[80%] flex items-center justify-center overflow-hidden">
              <p className=" text-gray-500 text-center z-10">Empty task</p>
            </div>
          )}
        </div>
      </div>
  );
}

export default TaskWave