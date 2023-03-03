import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Styles from '../movie-browse/MovieBrowse.module.css'
import { CardMovieBrowse } from '../card-movie-browse/CardMovieBrowse';
import { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const MovieBrowse = ({ movies, title }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);


  return (
    <div className={Styles.body}>
      <h1 className={Styles.title}>{title}</h1>
      <div className={Styles.container}>
        <Swiper
          slidesPerView={6}
          navigation={true}
          modules={[Navigation, Pagination, Controller]}
          controller={{ control: controlledSwiper }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={setControlledSwiper}
        >
          {movies && movies.map(e =>
            <SwiperSlide className={Styles.swiperr} >
              <CardMovieBrowse className={Styles.card} id={e.id} poster_path={e.poster_path} />
            </SwiperSlide>
          )
          }
        </Swiper>
      </div>
    </div>

  )
}
