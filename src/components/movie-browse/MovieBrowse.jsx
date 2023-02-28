import React, { useEffect, useState } from 'react'
import { fetchTrending } from '../../services/api/apiQuerys'
import Styles from '../movie-browse/MovieBrowse.module.css'

const { VITE_URL_IMAGE } = import.meta.env

export const MovieBrowse = ({ id, name }) => {

  const [data, setData] = useState({ movies: [], isLoading: true })

  useEffect(() => {
    console.log(id)
    fetchTrending(setData, 'movie', id)
  }, [])

  return (
    <div>
      <h2 className={Styles.title}>{name && name}</h2>
      <div className={Styles.container}>
        {!data.isLoading && data.movies?.map((movie) =>
          <img className={Styles.img} key={movie.id} src={`${VITE_URL_IMAGE + movie.poster_path}`} />)
        }
        {console.log(data.movies)}
      </div>
    </div>

  )
}
