import React from 'react'
import { createContext } from 'react'

export const Context = createContext()
export const ContextConsumer = Context.Consumer
export const ContextProvider = Context.Provider

export const DataShare = ({ children }) => {

  return (
    <ContextProvider value={{ text: "context andando" }}>
      {children}
    </ContextProvider>
  )
}
