import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../../services/api/apiQuerys'
import Styles from '../movie-browse/MovieBrowse.module.css'

const { VITE_URL_IMAGE } = import.meta.env

export const MovieBrowse = ({ id }) => {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    fetchMovies(setMovies)
  }, [])

  return (
    <div className={Styles.container}>
      {id && movies.length > 0 && movies.filter(e => e.genre_ids.includes(id)).map((movie) => <img className={Styles.img} key={movie.id} src={`${VITE_URL_IMAGE + movie.poster_path}`} />)}
      {console.log(movies, id)}
    </div>
  )
}
