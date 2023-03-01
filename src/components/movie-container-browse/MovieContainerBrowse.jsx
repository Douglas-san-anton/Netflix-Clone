import { useContext, useEffect, useState } from "react"
import { Context } from '../../context/DataContext.jsx';
import { fetchByGenres } from "../../services/api/apiQuerys.js";

const obj = {
  clasificationA: ['tv', 'movie'],
  clasificationB: ['topTranding', 'movie']
}

export const MovieContainerBrowse = ({ programationType }) => {

  let { genres } = useContext(Context)
  const [data, setData] = useState({ movies: [], isLoading: true })


  useEffect(() => {
    // console.log(id)
    // fetchByGenres(setData, 'movie', id)
  }, [])

  return (
    <>
    </>
  )
}
