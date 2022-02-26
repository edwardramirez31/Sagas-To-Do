import type { Selector } from '../types/redux';
import type { Task } from '../slices/taskSlice';

export const getTasks: Selector<Task[]> = (state): Task[] => state.task.tasks;

export const getTasksLoading: Selector<boolean> = (state): boolean => state.task.loading;
