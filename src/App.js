import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Popular from './Popular';
import TopRated from './TopRated';
import Trending from './Trending';
import { Button } from '@mui/material';

function App() {


  return (
    <div className="App">

      <h1>MY MOVIES APP</h1>

      <Link to={'/trending'}><Button variant='contained'>Trending</Button></Link>
      <Link to={'/popular'}><Button variant='contained'>Popular</Button></Link>
      <Link to={'/top-rated'}><Button variant='contained'>TopRated</Button></Link>

      <Routes>
        <Route path='/trending' element={<Trending />}></Route>
        <Route path='/popular' element={<Popular />}></Route>
        <Route path='/top-rated' element={<TopRated />}></Route>
      </Routes>
    </div>
  );
}

export default App;
