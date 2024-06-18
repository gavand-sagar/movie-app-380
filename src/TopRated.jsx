import React from 'react'
import MovieList from './MovieList'

export default function TopRated() {
  return (
    <MovieList heading={"Top Rated"} url={'https://api.themoviedb.org/3/movie/top_rated'}/>

  )
}
