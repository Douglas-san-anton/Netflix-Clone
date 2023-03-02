import { useContext, useEffect, useState } from "react"
import { Context } from '../../context/DataContext.jsx';
import { fetchFunctions } from "../../services/api/apiQuerys.js";
import { MovieBrowse } from "../movie-browse/MovieBrowse.jsx";

export const MovieContainerBrowse = ({ type, title }) => {

  let { genres } = useContext(Context)
  const [data, setData] = useState({ movies: [], isLoading: true })


  useEffect(() => {
    if (type !== 'genres') {
      fetchFunctions[type](setData)
    } else {

    }
  }, [])

  return (
    <>
      {
        !data.isLoading && type !== 'genres' && <MovieBrowse title={title} movies={data.movies} />
      }
    </>
  )
}
