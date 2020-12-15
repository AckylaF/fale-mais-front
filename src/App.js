import styled, { ThemeProvider, css } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyles";
import Routes from "./routes";
import theme from "./theme";

const Main = styled.main(
  ({ theme: { media } }) => css`
    display: grid;
    grid-template-columns: 60% 40%;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    @media screen and (max-width: ${media.small}) {
      grid-template-columns: unset;
      grid-template-rows: 30% 70%;
      margin-top: 2rem;
    }

    @media screen and (min-width: ${media.small}) and (max-width: ${media.medium}) {
      grid-template-columns: unset;
      grid-template-rows: 50% 50%;
      margin-top: 2rem;
    }
  `
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Routes />
      </Main>
    </ThemeProvider>
  );
}

export default App;
