import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      name: 'My first list',
      isChecked: false,
    },
  ],
  reducers: {
    addItem: (state, action) => {
        state.push({ name: action.payload, isChecked: false })
    },
    removeItem: (state, action) => {
        state.splice(action.payload, 1)
    },
    toggleCheck: (state, action) => {
        state[action.payload].isChecked = !state[action.payload].isChecked
    }
  },
});

export const {addItem, removeItem, toggleCheck} = todosSlice.actions;
export default todosSlice.reducer;
