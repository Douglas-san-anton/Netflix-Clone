import { useContext, useEffect, useState } from "react"
import { Context } from '../../context/DataContext.jsx';
import { fetchFunctions } from "../../services/api/apiQuerys.js";
import { MovieBrowse } from "../movie-browse/MovieBrowse.jsx";

export const MovieContainerBrowse = ({ type, title }) => {

  let { genres } = useContext(Context)
  const [data, setData] = useState({ movies: [], isLoading: true })

  function loadData(type, title) {
    if (type !== 'genres') {
      fetchFunctions[type](setData)
    } else if (type === 'genres' && genres) {
      let genre = genres.find(e => e.name === title)
      fetchFunctions[type](setData, genre.id)
    }
  }

  useEffect(() => {
    data.isLoading && genres && loadData(type, title)
  }, [genres])

  return (
    <>
      {!data.isLoading && <MovieBrowse title={title} movies={data.movies} />}
    </>
  )
}
