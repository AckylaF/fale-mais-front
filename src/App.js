import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyles';
import Routes from './routes';
import theme from './theme';


const Main = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;



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
