import { ThemeProvider } from '@mui/material';
import theme from '../styles/themes/themes';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>

  );
}

export default MyApp
