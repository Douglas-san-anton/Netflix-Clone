import { useEffect, useContext } from 'react'
import Styles from '../catalogue-browse/CatalogueBrowse.module.css'
import { MovieBrowse } from '../movie-browse/MovieBrowse'
import { Context } from '../../context/DataContext.jsx';

export const CatalogueBrowse = () => {
  let { genres } = useContext(Context)


  useEffect(() => {
    console.log(genres);
  }, [genres])

  return (
    <div className={Styles.container}>
      <div className={Styles.slider}>
        <h2 className={Styles.titles}>{genres && genres[0].name}</h2>
        <MovieBrowse id={genres && genres[0].id} />
      </div>
      <div className={Styles.slider}>
        <h2 className={Styles.titles}>{genres && genres[1].name}</h2>
        <MovieBrowse id={genres && genres[1].id} />
      </div>
      <div className={Styles.slider}>
        <h2 className={Styles.titles}>{genres && genres[2].name}</h2>
        <MovieBrowse id={genres && genres[2].id} />
      </div>
      <div className={Styles.slider}>
        <h2 className={Styles.titles}>{genres && genres[3].name}</h2>
        <MovieBrowse id={genres && genres[3].id} />
      </div>
    </div>
  )
}
