import { MantineProvider } from '@mantine/core';
import Home from './Home';
import GlobalStyles from './GlobalStyles';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{ fontFamily: 'Roboto, sans-serif' }} withGlobalStyles withNormalizeCSS>
        <GlobalStyles />
        <Home />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
