import Styles from '../catalogue-browse/CatalogueBrowse.module.css'
import { MovieContainerBrowse } from '../movie-container-browse/MovieContainerBrowse';

export const CatalogueBrowse = () => {


  return (
    <div className={Styles.container}>
      <MovieContainerBrowse />
    </div>
  )
}
