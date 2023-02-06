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

export const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.hero__bg}>

          <nav className={Styles.nav__container}>
            <span className={Styles.nav__span}><img src={logo} alt="logo" /></span>
            <div>
              <select className={Styles.nav__select}>
                <option value="/ar/" data-language="es">Español</option>
                <option value="/ar-en/" data-language="en">English</option>
              </select>
              <Link className={Styles.nav__button} to={'/login'}>Iniciar sesión</Link>
            </div>
          </nav>
          <div className={Styles.hero__bg_opacity}></div>

          <div className={Styles.hero__card}>
            <h1>Películas y series ilimitadas y mucho más</h1>
            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>

            <form className={Styles.hero__form}>
              <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
              <div className={Styles.hero__form_email}>

                <label className={Styles.hero__form_input}>
                  <input autoComplete='Email' placeholder='Email' type="email" maxLength={50} minLength={5} />
                </label>

                <button className={Styles.hero__form_btn}>
                  <span>Comenzar</span>
                  <span>{'>'}</span>
                </button>

              </div>
            </form>
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
