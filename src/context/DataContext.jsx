import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { fetchGenres } from '../services/api/apiQuerys'

export const Context = createContext()
export const ContextConsumer = Context.Consumer
export const ContextProvider = Context.Provider

export const DataShare = ({ children }) => {
  const [genres, setGenres] = useState([])


  useEffect(() => {
    genres.length > 0 && fetchGenres(cb)
  }, [])

  return (
    <ContextProvider value={{ genres }}>
      {children}
    </ContextProvider>
  )
}

