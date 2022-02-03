import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
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
    checkHandler: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      state.tasks[taskIndex].isDone = !state.tasks[taskIndex].isDone;
    },
    setIsUpdating: (state, action) => {
      const newTasks = state.tasks.map((task) => {
        return task.id === action.payload
          ? { ...task, isUpdating: true }
          : task;
      });
      state.tasks = newTasks;
    },
    updateTask: (state, action) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            task: action.payload.text,
            isUpdating: false,
          };
        }
        return task;
      });
      state.tasks = newTasks;
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
  checkHandler,
  setIsUpdating,
  updateTask,
} = taskSlice.actions;

export default taskSlice.reducer;
// id, text, completed
// https://edwardramirez.pythonanywhere.com/
// https://edwardramirez.pythonanywhere.com/task/1/
