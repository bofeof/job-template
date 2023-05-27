import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addPositions } from './store/positions/position-actions';
import data from './mock/data.json';

function App() {
  const dispatch = useDispatch();

  // load and set mock-data (1st render)
  useEffect(() => {
    dispatch(addPositions(data)); //data = positions
  }, []);

  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
