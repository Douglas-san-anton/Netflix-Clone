import Styles from '../catalogue-browse/CatalogueBrowse.module.css'
import { MovieContainerBrowse } from '../movie-container-browse/MovieContainerBrowse';

export const CatalogueBrowse = () => {

  return (
    <div className={Styles.container}>
      <MovieContainerBrowse type={'tv'} title={'Originales de Netflix'} />
      <MovieContainerBrowse type={'trending'} title={'Tendencias'} />
      <MovieContainerBrowse type={'popular'} title={'Populares en Netflix'} />
      <MovieContainerBrowse type={'topRated'} title={'Mas vistas'} />
      <MovieContainerBrowse type={'genres'} title={'Action'} />
      <MovieContainerBrowse type={'genres'} title={'Comedy'} />
      <MovieContainerBrowse type={'genres'} title={'Drama'} />
    </div>
  )
}
