import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { TTask, TTaskStatus } from "../../shared/types/types";

type TasksState = {
  tasks: TTask[];
};

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const { title } = action.payload;
      const timestamp = Date.now();

      const task: TTask = {
        id: `${title}${timestamp}`,
        title,
        date: timestamp,
        status: "idle",
      };

      state.tasks.push(task);
    },
    changeTaskStatus: (state, action: PayloadAction<{ id: string; status: TTaskStatus }>) => {
      const { id, status } = action.payload;

      const task = state.tasks.find((task) => task.id === id);

      if (task) task.status = status;
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    setTasks: (state, action: PayloadAction<{ tasks: TTask[] }>) => {
      const { tasks } = action.payload;

      state.tasks = tasks;
    },
  },
});

export const { addTask, changeTaskStatus, deleteTask, setTasks } = tasksSlice.actions;
