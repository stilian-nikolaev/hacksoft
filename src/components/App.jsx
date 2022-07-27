import { MantineProvider, Text } from '@mantine/core';
import Home from './Home';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Home />
    </MantineProvider>
  )
}

export default App
