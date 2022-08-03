import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { MantineProvider } from '@mantine/core';

import GlobalStyles from './GlobalStyles';
import Layout from './layout/Layout';
import Router from './Router';

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
