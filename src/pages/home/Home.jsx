import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Home.module.css'
import logo from '../../assets/netflix.png'
import tv from '../../assets/tv.png'
import mobile from '../../assets/mobile.jpg'
import boxshot from '../../assets/boxshot.png'
import device from '../../assets/device.png'
import kids from '../../assets/kids.png'
import { Faq } from '../../components/faq/Faq'
import { Footer } from '../../components/footer/Footer'
import { Form } from '../../components/form/Form'

export const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.hero__bg}>

        <nav className={Styles.nav__container}>
          <span className={Styles.nav__span}><img src={logo} alt="logo" /></span>
          <div>
            <div className={Styles.nav__select_container}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>

              <select className={Styles.nav__select}>
                <option value="/ar/" data-language="es">Español</option>
                <option value="/ar-en/" data-language="en">English</option>
              </select>
            </div>
            <Link className={Styles.nav__button} to={'/login'}>Iniciar sesión</Link>
          </div>
        </nav>
        <div className={Styles.hero__bg_opacity}></div>

        <div className={Styles.hero__card}>
          <h1>Películas y series ilimitadas y mucho más</h1>
          <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>

          <Form />
        </div>

      </div>

      <section className={Styles.watchTv}>
        <div className={Styles.watchTv__container}>
          <div className={Styles.watchTv__text}>
            <h1>Disfruta en tu TV</h1>
            <h2>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</h2>
          </div>

          <div className={Styles.watchTv__img_container}>
            <div className={Styles.watchTv__img_animation}>
              <img src={tv} alt="tv_img" />
              <div className={Styles.card_animation}>
                <video autoPlay muted loop>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type='video/mp4' />
                </video>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={Styles.download}>
        <div className={Styles.download__container}>
          <div className={Styles.download__text}>
            <h1>Descarga tus series para verlas offline</h1>
            <h2>Guarda tu contenido favorito y tendrás siempre algo para ver.</h2>
          </div>

          <div className={Styles.download__img_container}>
            <div className={Styles.download__img_animation}>
              <img src={mobile} alt="tv_img" />
              <div className={Styles.download__card_animation}>
                <div className={Styles.download__card__img}>
                  <img src={boxshot} alt="portada" />
                </div>

                <div className={Styles.download__card__text}>
                  <p>Stranger Things</p>
                  <p>Descargando...</p>
                </div>

                <div className={Styles.download__custom_animation}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={Styles.device}>
        <div className={Styles.device__container}>
          <div className={Styles.device__text}>
            <h1>Disfruta donde quieras</h1>
            <h2>Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo adicional.</h2>
          </div>

          <div className={Styles.device__img_container}>
            <div className={Styles.device__img_animation}>
              <img src={device} alt="device" />
              <div className={Styles.device__card_animation}>
                <video autoPlay muted loop>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type='video/mp4' />
                </video>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={Styles.kids}>
        <div className={Styles.kids__container}>
          <div className={Styles.kids__text}>
            <h1>Crea perfiles para niños</h1>
            <h2>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</h2>
          </div>

          <div className={Styles.kids__img_container}>
            <div className={Styles.kids__img_animation}>
              <img src={kids} alt="tv_img" />
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <Footer />
    </div>
  )
}
