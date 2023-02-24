import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import './CatalogueBrowse.css'

export const CatalogueBrowse = () => {

  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '6fb2ca4be7447bcb8f45a23d1ff94045'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [movie, setMovie] = useState({})

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const { data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    })

    setMovies(results)
    // setMovie(results[0])
  }

  useEffect(() => {
    fetchMovies(setMovie)
  }, [])

  return (
    <div>

      <div>
        <div>
          {movies.map((movie) => {
            <div key={movie.id}>
              <img src={`${URL_IMAGE + movie.poster_path}`} />
              <h4>{movie.title}</h4>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}
