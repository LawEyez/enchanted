import { createContext, useState } from "react";
import { Theme as OriginalTheme, themes } from "./theme";

interface Theme {
  isLight: boolean,
  theme: OriginalTheme,
  changeTheme: Function,
}


export const ThemeContext = createContext<Theme>({
  isLight: true,
  theme: themes.light,
  changeTheme: () => {}
})

const ThemeContextProvider = (props: any) => {
  const [isLight, setIsLight] = useState(true)

  const changeTheme = () => {
    setIsLight(!isLight)
  }

  const state = {
    isLight,
    theme: isLight ? themes.light : themes.dark,
    changeTheme
  }

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider



