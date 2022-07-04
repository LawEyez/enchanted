const lightTheme = {
  primary: '#ff6663',
  text: '#0d0d0d',
  textVariant: '#161616',
  textAlt1: '#777',
  textAlt2: '#333',
  bg: '#fff',
  bgVariant: 'rgb(238, 238, 238, .9)',
  bgAlt: ''
}

const darkTheme: Theme = {
  primary: '#ff6663',
  text: '#fff',
  textVariant: '#c1c1c1',
  textAlt1: '#333',
  textAlt2: '#777',
  bg: '#0d0d0d',
  bgVariant: 'rgb(22, 22, 22, .9)',
  bgAlt: ''
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme
}