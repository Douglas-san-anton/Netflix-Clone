import React from 'react'
import { MainBrowse } from '../../components/main-browse/MainBrowse'
import { NavBrowse } from '../../components/nav-browse/NavBrowse'

export const Browse = () => {
  return (
    <div>
      <NavBrowse />
      <MainBrowse />
    </div>
  )
}
