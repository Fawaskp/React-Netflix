import './RowPost.css'
import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPost(props) {

  const [poster,setPoster] = useState([])

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setPoster(response.data.results)
    }).catch(err=> alert('posters not loaded!') )
  },[])

  const [urlId,setUrlId] = useState(null)

  const handleTrailer = (movieId)=>{
    axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!=0){
          if(urlId==response.data.results[0].key){
            setUrlId(null)
            return;
          }
          setUrlId(response.data.results[0].key)
      }
      else
          alert('trailer not found')

    }).catch(err=>{alert('something went wrong in youtube trailer loading')})
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className={props.isSmall?"small-posters movie-posters": "movie-posters"}>
          {
            poster?.map((movie,idx)=>{
              return(
              <img onClick={()=>{handleTrailer(movie.id)}} key={idx} src={imageUrl+movie.backdrop_path} alt="Movie Poster" />
              )
            })
          }
        </div>

        {urlId? <Youtube videoId={urlId} opts={opts} style={{transition:1}} /> : null}
    </div>
  )
}

export default RowPost
