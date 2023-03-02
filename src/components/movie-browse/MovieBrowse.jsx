import React from 'react'
import Styles from '../movie-browse/MovieBrowse.module.css'

const { VITE_URL_IMAGE } = import.meta.env

export const MovieBrowse = ({ movies, title }) => {

  return (
    <div className={Styles.body}>
      <h1 className={Styles.title}>{title}</h1>
      <div className={Styles.container}>
        {movies && movies?.map((movie) =>
          <img className={Styles.img} key={movie.id} src={`${VITE_URL_IMAGE + movie.poster_path}`} />)
        }
      </div>
    </div>
  )
}
