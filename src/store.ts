import { create, StateCreator } from 'zustand';

export type TASK = {
  title: string;
  state: string;
};

type Store = {
  tasks: TASK[];
  addTask: (task:TASK) => void;
};

const store: StateCreator<Store> = (set, get) => ({
  tasks: [],
  addTask: (task: TASK) => {
    const tasks = get().tasks;
    set({
      tasks: [...tasks, { ...task }],
    });
  },
});
export const useStore = create<Store>(store);
