import { useSelector } from 'react-redux';
import { selectVisiblePositions } from './position-slice';
import { selectFilters } from 'features/filter/filter-slice';

export const usePositions = () => {
  // get current filters and filter data
  const filters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, filters));

  return positions;
};
