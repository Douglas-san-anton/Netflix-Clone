import { useEffect, useContext } from 'react'
import Styles from '../catalogue-browse/CatalogueBrowse.module.css'
import { MovieBrowse } from '../movie-browse/MovieBrowse'
import { Context } from '../../context/DataContext.jsx';

export const CatalogueBrowse = () => {
  let data = useContext(Context)

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div className={Styles.container}>
      <div className={Styles.slider}>
        <h2 className={Styles.titles}>Populares en Netfilx</h2>
        <MovieBrowse />
      </div>
      <div className={Styles.slider}>
        <h2 className={Styles.titles}>Tendencias</h2>
        <MovieBrowse />
      </div>
      <div className={Styles.slider}>
        <h2 className={Styles.titles}>Series</h2>
        <MovieBrowse />
      </div>
      <div className={Styles.slider}>
        <h2 className={Styles.titles}>Documentales</h2>
        <MovieBrowse />
      </div>
    </div>
  )
}
