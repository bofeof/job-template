import { JobPosition } from './JobPosition';
// import { selectAllPositions } from '../store/positions/position-selectors';
import { selectVisiblePositions } from '../store/positions/position-selectors';
import { useSelector, useDispatch } from 'react-redux';

import { addFilter } from 'store/filters/filter-actions';

import { selectFilters } from '../store/filters/filter-selectors';

const JobList = () => {
  const dispatch = useDispatch();

  // get current filters and filter data
  const filters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, filters));

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {/* create every job position from json data */}
      {positions.map((item) => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  );
};

export { JobList };
