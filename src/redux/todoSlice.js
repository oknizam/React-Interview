import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addNew(state, action) {
      const id = Math.floor(Math.random() * 100);
      state.push({
        name: action.payload.name,
        id,
        completed: false
      })
    },
    markDone(state, action) {
      return state.filter(({ id }) => id !== action.payload.id);
    }
  }
});

export const { addNew, markDone } = todoSlice.actions;

export default todoSlice.reducer;
