import './App.css';
import MovieList from './MovieList';

export default function Trending() {
  return (
    <MovieList heading={"Trending"} url={'https://api.themoviedb.org/3/trending/movie/day?language=en-US'}/>
  )
}
