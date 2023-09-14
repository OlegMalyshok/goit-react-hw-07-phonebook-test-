import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Enter a name"
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};
