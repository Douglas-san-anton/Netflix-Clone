import React from 'react'
import Styles from './Browse.module.css'
import { MainBrowse } from '../../components/main-browse/MainBrowse'
import { NavBrowse } from '../../components/nav-browse/NavBrowse'

export const Browse = () => {
  return (
    <div className={Styles.container}>
      <NavBrowse />
      <MainBrowse />
    </div>
  )
}
