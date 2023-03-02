import Styles from '../catalogue-browse/CatalogueBrowse.module.css'
import { MovieContainerBrowse } from '../movie-container-browse/MovieContainerBrowse';

export const CatalogueBrowse = () => {

  return (
    <div className={Styles.container}>
      <MovieContainerBrowse type={'tv'} title={'Originales de Netflix'} />
      <MovieContainerBrowse type={'popular'} title={'Populares en Netflix'} />
      <MovieContainerBrowse type={'topRated'} title={'Mas vistas'} />
      <MovieContainerBrowse type={'trending'} title={'Tendencias'} />
    </div>
  )
}
