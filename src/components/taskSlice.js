/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTask: (state, _action) => {
      state.loading = true;
    },
    addTaskSuccess: (state, action) => {
      // { id: 1, text: "Hello", completed: false }
      state.tasks = [...state.tasks, action.payload];
      state.loading = false;
    },
    addTaskError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    getTask: (state, _action) => {
      state.loading = true;
    },
    getTaskSuccess: (state, action) => {
      // { id: 1, text: "Hello", completed: false }
      state.tasks = [...state.tasks, ...action.payload];
      state.loading = false;
    },
    getTaskError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setIsUpdating: (state, action) => {
      const newTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, isUpdating: true } : task
      );
      state.tasks = newTasks;
    },
    updateTask: (state, _action) => {
      state.loading = false;
    },
    updateTaskSuccess: (state, action) => {
      const task = action.payload;
      const newTasks = state.tasks.map((item) => {
        if (item.id === task.id) {
          return {
            ...task,
            task: task.text,
            isUpdating: false,
          };
        }
        return item;
      });
      state.tasks = newTasks;
      state.loading = false;
    },
  },
});

export const {
  addTask,
  addTaskSuccess,
  addTaskError,
  getTask,
  getTaskSuccess,
  getTaskError,
  removeTask,
  setIsUpdating,
  updateTask,
  updateTaskSuccess,
} = taskSlice.actions;

export default taskSlice.reducer;
// id, text, completed
// https://edwardramirez.pythonanywhere.com/
// https://edwardramirez.pythonanywhere.com/task/1/
