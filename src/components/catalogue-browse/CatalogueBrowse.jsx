import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from '../catalogue-browse/CatalogueBrowse.module.css'

export const CatalogueBrowse = () => {

  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '6fb2ca4be7447bcb8f45a23d1ff94045'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  const [movies, setMovies] = useState([])

  const fetchMovies = async (cb) => {
    const { data: { results },
    } = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: API_KEY
      },
    })

    cb(results)
  }

  useEffect(() => {
    fetchMovies(setMovies)
  }, [])

  return (
    <div className={Styles.container}>
      {movies.map((movie) => <img key={movie.id} src={`${URL_IMAGE + movie.poster_path}`} />)}
    </div>
  )
}
