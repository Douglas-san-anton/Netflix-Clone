import React from 'react'
import Styles from './NavBrowse.module.css'
import logo from '../../assets/netflix.png'

export const NavBrowse = () => {
  return (
    <div>
      <div className={Styles.pinning__header}>
        <div className={Styles.pinning__header_container}>
          <div className={Styles.main_header}>
            <a aria-label="Netflix" className={Styles.logo} href="/browse">
              <img src={logo} alt="logo" />
            </a>
            <ul className={Styles.tabbed__primary_navigation}>
              <li className={Styles.navigation__menu}>
                <a className={Styles.menu_trigger} role="button" aria-haspopup="true" href="todo" tabIndex="0">Explorar</a>
              </li>
              <li className={Styles.navigation__tab}>
                <a className={Styles.current__active} active href="/browse">Inicio</a>
              </li>
              <li className={Styles.navigation__tab}>
                <a href="/browse/genre/83">Series</a>
              </li>
              <li className={Styles.navigation__tab}>
                <a href="/browse/genre/34399">Películas</a>
              </li>
              <li className={Styles.navigation__tab}>
                <a href="/latest">Novedades populares</a>
              </li>
              <li className={Styles.navigation__tab}>
                <a href="/browse/my-list">Mi lista</a>
              </li>
              <li className={Styles.navigation__tab}>
                <a href="/browse/original-audio">Explora por idiomas</a>
              </li>
            </ul>
            <div className={Styles.secondary__navigation}>
              <div className={Styles.nav__element}>
                <div className={Styles.searchBox}>
                  <button className={Styles.searchTab} tabIndex="0" aria-label="Buscar" data-uia="search-box-launcher">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.search_icon}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z" fill="currentColor"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={Styles.nav__element}>
                <a href="/Kids">Niños</a>
              </div>
              <div className={Styles.nav__element}>
                <span className={Styles.notifications}>
                  <button className={Styles.notifications__menu} aria-haspopup="true" aria-expanded="false" aria-label="Notificaciones">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.hawkins_icon}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path>
                    </svg>
                  </button>
                </span>
              </div>
              <div className={Styles.nav__element}>
                <div className={Styles.account__menu_item}>
                  <div className={Styles.account__dropdown_button}>
                    <a href="/YourAccount" role="button" tabIndex="0" aria-haspopup="true" aria-expanded="false" aria-label="Maria Jose - Cuenta y configuración">
                      <span className={Styles.profile__link} role="presentation">
                        <img className={Styles.profile__icon} src="http://occ-0-7118-114.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeD-D1z0XBTshF8RleitH-BbW2-bfi_8NTuyMJPGSD-db9NLp-goDTQHTmoPI-qCCB5Y9yjqHmnwAj1QwDPPZOtV5AiDxkw.png?r=d0a" alt=""/>
                      </span>
                    </a>
                    <span className={Styles.caret} role="presentation"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
