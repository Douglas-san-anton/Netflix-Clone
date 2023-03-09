import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../movie-browse/MovieBrowse.css'
import { CardMovieBrowse } from '../card-movie-browse/CardMovieBrowse';
import { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const MovieBrowse = ({ movies, title }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);


  return (
    <div className='body'>
      <h1 className='title'>{title}</h1>
      <div className='container'>
        <Swiper
          slidesPerView={5.7}
          slidesPerGroup={5}
          speed={500}
          navigation={true}
          modules={[Navigation, Pagination, Controller]}
          controller={{ control: controlledSwiper }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={setControlledSwiper}
        >
          {movies && movies.map(e =>
            <SwiperSlide className='swiperr last-slide' >
              <CardMovieBrowse className='card' id={e.id} poster_path={e.poster_path} />
            </SwiperSlide>
          )
          }
        </Swiper>
      </div>
    </div>

  )
}
