import { useContext } from 'react'
import Styles from '../catalogue-browse/CatalogueBrowse.module.css'
import { MovieBrowse } from '../movie-browse/MovieBrowse'
import { Context } from '../../context/DataContext.jsx';
import { MovieContainerBrowse } from '../movie-container-browse/MovieContainerBrowse';

export const CatalogueBrowse = () => {
  let { genres } = useContext(Context)

  return (
    <div className={Styles.container}>
      <MovieContainerBrowseowse />
      {genres && genres?.length > 0 && <MovieBrowse {...genres[0]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[1]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[2]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[3]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[4]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[5]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[6]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[7]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[8]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[9]} />}
      {genres && genres?.length > 0 && <MovieBrowse {...genres[10]} />}

    </div>
  )
}
