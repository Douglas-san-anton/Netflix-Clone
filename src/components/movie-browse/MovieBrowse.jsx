import React from 'react'
import Styles from '../movie-browse/MovieBrowse.module.css'

const { VITE_URL_IMAGE } = import.meta.env

export const MovieBrowse = ({ movies }) => {

  return (
    <div className={Styles.container}>
      {movies && movies?.map((movie) =>
        <img className={Styles.img} key={movie.id} src={`${VITE_URL_IMAGE + movie.poster_path}`} />)
      }
    </div>
  )
}
