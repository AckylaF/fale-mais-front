import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyles';
import Routes from './routes';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
