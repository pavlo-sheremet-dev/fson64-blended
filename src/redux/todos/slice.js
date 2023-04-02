import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    editingTodo: null,
  },
  reducers: {
    addTodo: {
      reducer: (state, { payload }) => {
        // state.items = [...state.items, payload];
        state.items.push(payload);
      },
      prepare: newTodo => {
        return {
          payload: { ...newTodo, id: nanoid(5) },
        };
      },
    },
    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
    editTodo: (state, { payload }) => {
      const index = state.items.findIndex(({ id }) => payload.id === id);
      state.items.splice(index, 1, payload);
    },
    toggleEditForm: (state, { payload }) => {
      state.editingTodo = payload ? payload : null;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleEditForm } =
  todosSlice.actions;
