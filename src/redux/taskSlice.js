import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      const newState = [...state, { id: Date.now(), text: action.payload, completed: false }];
      saveState(newState);
      return newState;
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      saveState(newState);
      return newState;
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const newState = state.map(task =>
        task.id === id ? { ...task, text: newText } : task
      );
      saveState(newState);
      return newState;
    },
    toggleTask: (state, action) => {
      const newState = state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      saveState(newState);
      return newState;
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
