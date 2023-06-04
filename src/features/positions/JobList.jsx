import { useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { addFilter } from 'features/filter/filter-slice';
import { usePositions } from './use-positions';
import { useFetchPositions } from './use-fetch-positions';

const JobList = () => {
  const dispatch = useDispatch();

  // first-run rendering data, get positions
  useFetchPositions();
  const positions = usePositions();

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
