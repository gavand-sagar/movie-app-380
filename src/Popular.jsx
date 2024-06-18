import './App.css';
import MovieList from './MovieList';

export default function Popular() {
  return (
    <MovieList heading={'Popular'} url={'https://api.themoviedb.org/3/movie/popular'} />
  )
}
