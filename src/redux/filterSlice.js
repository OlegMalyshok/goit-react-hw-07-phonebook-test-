export const setFilter = filter => ({
  type: 'contacts/setFilter',
  payload: filter,
});

const filterInitialState = '';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'contacts/setFilter':
      return action.payload;
    default:
      return state;
  }
};
