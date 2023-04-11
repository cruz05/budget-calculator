import { createContext } from "react"
import useStateHandler from "./useStateHandler"

const ServicesContext = createContext([])

function ServicesContextProvider({children}) {

  return (
    <ServicesContext.Provider value={useStateHandler()}>
      {children}
    </ServicesContext.Provider>
  )
}

export {ServicesContext , ServicesContextProvider}