import React from 'react'
import Styles from '../card-movie-browse/CardMovieBrowse.module.css'

const { VITE_URL_IMAGE } = import.meta.env

export const CardMovieBrowse = ({ id, poster_path }) => {
  return (
    <div>
      <img className={Styles.img} key={id} src={`${VITE_URL_IMAGE + poster_path}`} />
    </div>
  )
}
