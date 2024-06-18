import moment from 'moment/moment';
import React from 'react'

//props
export default function MovieCard({ title, release_date, poster_path, vote_average, marks }) {

    function getFormattedDate() {
        return moment(release_date).format("MMM DD, yyyy")
    }

    function getPath() {
        return 'https://image.tmdb.org/t/p/w200' + poster_path;
    }

    return (
        <div className='movie-card'>
            <div className='movie-card-img'>
                <img width={'100%'} src={getPath()} />
            </div>
            <div className='movie-title'>{title}</div>
            <div className='movie-release-date'>{getFormattedDate()}</div>
            <div>Rating: {vote_average ? vote_average : "NA"}</div>
        </div>
    )
}
