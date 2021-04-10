import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useFetchData from './useFetchData';
import { Container } from '@material-ui/core';
import Job from '../src/components/Job';


function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetchData(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {data.map(job => {
        return <Job key={job.id} job={job}/>
      })}
    </Container>
  );
}

export default App;