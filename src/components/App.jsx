import { MantineProvider } from '@mantine/core';
import Home from './Home';
import GlobalStyles from './GlobalStyles';

function App() {

  return (
    <MantineProvider theme={{fontFamily: 'Roboto, sans-serif'}} withGlobalStyles withNormalizeCSS>
      <GlobalStyles/>
      <Home />
    </MantineProvider>
  )
}

export default App
