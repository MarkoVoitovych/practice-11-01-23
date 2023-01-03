import { useSelector, useDispatch } from 'react-redux';
import css from './StatusFilter.module.css';
import { Button } from 'components/Button/Button';
import {
  STATUS_FILTERS_ALL,
  STATUS_FILTERS_ACTIVE,
  STATUS_FILTERS_COMPLETED,
} from '../../redux/constants';
import { getFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/filtersSlice';

export const StatusFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterChange = value => {
    dispatch(setStatusFilter(value));
  };
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === STATUS_FILTERS_ALL}
        onClick={() => handleFilterChange(STATUS_FILTERS_ALL)}
      >
        All
      </Button>
      <Button
        selected={filter === STATUS_FILTERS_ACTIVE}
        onClick={() => handleFilterChange(STATUS_FILTERS_ACTIVE)}
      >
        Active
      </Button>
      <Button
        selected={filter === STATUS_FILTERS_COMPLETED}
        onClick={() => handleFilterChange(STATUS_FILTERS_COMPLETED)}
      >
        Completed
      </Button>
    </div>
  );
};
