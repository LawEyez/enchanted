import React, { createContext } from "react";
import { useScrollToTop } from "../../hooks/useScrollToTop";

interface ScrollContextProps {
  children?: React.ReactChild
}

const ScrollContext = createContext({})

const ScrollContextProvider: React.FC<ScrollContextProps> = ({ children }) => {
  useScrollToTop()

  return (
    <ScrollContext.Provider value={{}}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollContextProvider