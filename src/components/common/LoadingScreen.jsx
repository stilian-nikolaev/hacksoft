import React from 'react'
import { Box, Loader } from '@mantine/core'

export default function LoadingScreen() {
  return (
    <Box sx={{ width: '100%', display: 'flex', 'justifyContent': 'center' }}>
      <Loader color="dark" />
    </Box>
  )
}
