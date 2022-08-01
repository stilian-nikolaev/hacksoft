import { Box, Center, Text } from '@mantine/core'
import React from 'react'

export default function NotFoundPage() {
  return (
    <Box sx={{display: 'grid', justifyContent: 'center', textAlign:'center', marginTop: 200}}>
      <Text sx={{ fontSize: 20 }}>We couldn't find what you are looking for :(</Text>
      <Text sx={{ fontSize: 20, marginTop: 10 }}>Try returning to the home page</Text>
    </Box>
  )
}
