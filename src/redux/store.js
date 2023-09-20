import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// const myMd1 = store => next => action => {
//   console.log('myMd1', action);
//   next(action);
// };

// const myMd2 = store => next => action => {
//   console.log('myMd2', action);
//   next(action);
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },

  // middleware: getDefaultMiddleware => {
  //   const defaultMd = getDefaultMiddleware();
  //   return [...defaultMd, myMd1, myMd2];
  // },
});

// const fetchTasks = () => async dispatch => {
//   try {
//     const response = await axios.get("/tasks");
//   } catch (e) {}
// };
