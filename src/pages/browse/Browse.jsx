import React from 'react'
import Styles from './Browse.module.css'
import { MainBrowse } from '../../components/main-browse/MainBrowse'
import { NavBrowse } from '../../components/nav-browse/NavBrowse'
import { CatalogueBrowse } from '../../components/catalogue-browse/CatalogueBrowse'

export const Browse = () => {
  return (
    <div className={Styles.container}>
      <NavBrowse />
      <MainBrowse />
      <CatalogueBrowse />
    </div>
  )
}
