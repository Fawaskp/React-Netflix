import React from 'react'
import './RowPost.css'
import moviePoster from '/home/fawas/Documents/Coding/React/netflix/src/assets/MainBanner.jpg'


function RowPost() {
  return (
    <div className='row'>
        <h2>Title</h2>
        <div className="movie-posters">
            <img src={moviePoster} alt="Movie Poster" />
            <img src={moviePoster} alt="Movie Poster" />
            <img src={moviePoster} alt="Movie Poster" />
            <img src={moviePoster} alt="Movie Poster" />
            <img src={moviePoster} alt="Movie Poster" />
        </div>
    </div>
  )
}

export default RowPost
