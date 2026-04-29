/* eslint-disable react-refresh/only-export-components */
// global task storage

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Task } from "../types/Task";

interface TaskContextType {
  tasks: Task[]; // array of task objects
  addTask: (task: Task) => void; // function to add a task
  updateTask: (updatedTask: Task) => void; // function to update a task
  deleteTask: (id: string) => void; // function to delete a task
  getTaskById: (id: string) => Task | undefined; // function to get a task by id
}

const TaskContext = createContext<TaskContextType | undefined>(undefined); // create context with undefined as default value

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  // provider component to wrap around the app and provide task context
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Sample Task",
      description: "This is a sample task for testing purposes.",
      status: "In-Progress",
      priority: "Medium",
      dueDate: "2026-04-27",
    }, // initial sample task for testing
  ]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]); // add a new task to the existing task list
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    ); // update task by mapping through the existing tasks and replacing the matching id task with the updated task
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // delete a task by filtering out the task with the matching id
  };

  const getTaskById = (id: string) => {
    return tasks.find((task) => task.id === id); // get a task by finding the task with the matching id
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, getTaskById }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext); // custom hook to use the task context

  if (!context) {
    throw new Error("useTasks must be used inside a TaskProvider");
  } // throw an error if the hook is used outside of the provider

  return context; // return the context value which includes tasks and the functions to maniulate the tasks
};
