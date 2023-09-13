import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setFilter } = slice.actions;

// export const setFilter = filter => ({
//   type: 'contacts/setFilter',
//   payload: filter,
// });

// const filterInitialState = '';

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/setFilter':
//       return action.payload;
//     default:
//       return state;
//   }
// };
