import React from 'react'
import Styles from './Browse.module.css'
import { MainBrowse } from '../../components/main-browse/MainBrowse'
import { NavBrowse } from '../../components/nav-browse/NavBrowse'
import { CatalogueBrowse } from '../../components/catalogue-browse/CatalogueBrowse'
import { Footer } from '../../components/footer/Footer.jsx'

export const Browse = () => {
  return (
    <div className={Styles.container}>
      <NavBrowse />
      <MainBrowse />
      {/* <CatalogueBrowse /> */}
      <Footer />
    </div>
  )
}
