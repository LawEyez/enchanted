import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, TopLeft } from "../styles/global-styles";

import Routes from "./routes";
import Brand from "./components/Brand";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import { ThemeContext } from "./contexts/Theme/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopLeft>
          <Brand />
        </TopLeft>

        <Menu />
        <Routes />
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


