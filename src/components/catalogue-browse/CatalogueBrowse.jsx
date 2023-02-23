import React, { useState } from 'react'
import axios from 'axios'
import './CatalogueBrowse.css'

export const CatalogueBrowse = () => {

  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '6fb2ca4be7447bcb8f45a23d1ff94045'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [movie, setMovie] = useState({ title: 'Loading Movies' })


  return (
    <div>

    </div>
  )
}
