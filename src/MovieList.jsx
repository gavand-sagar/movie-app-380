import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { Skeleton } from '@mui/material';

export default function MovieList({ url, heading }) {
    let [list, setList] = useState([]);
    let [loading, setLoading] = useState(false)
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzlkYzlhMjA2MzdmZjY0YWIwOGQ3MmU4NzZkZTM4MCIsInN1YiI6IjY1NTMyMDY4NjdiNjEzNDVjY2FkZTEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6wWg8vfXcNCyX7GebqtFEAo_0iHk31Eqf5pWaT8sJ0'
            }
        };

        setLoading(true)
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                //when you receive the response 
                setList(json.results)
            })
            .catch(err => console.error('error:' + err))
            .finally(() => {
                setLoading(false)
            })



    }, [])


    return (
        <div>
            <h1>{heading}</h1>
            <hr />
            {
                loading ? 
                <Skeleton height={400} width={200}/>
                    :
                    list.map(item => <MovieCard vote_average={item.vote_average} title={item.title} release_date={item.release_date} poster_path={item.poster_path} />)
            }
        </div>
    );
}
