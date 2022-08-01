import { MantineProvider } from '@mantine/core';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Router from './Router';
import Layout from './layout/Layout';

function App() {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={{ fontFamily: 'Roboto, sans-serif' }} withGlobalStyles withNormalizeCSS>
          <GlobalStyles />
          <Layout>
            <Router />
          </Layout>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
