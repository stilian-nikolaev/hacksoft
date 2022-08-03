import React from 'react'
import { Box, Text } from '@mantine/core'

export default function PostContent({ content }) {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Text sx={{ color: '#212529', fontSize: 16, '@media (max-width: 500px)': { fontSize: 14, } }}>
        {content}
      </Text>
    </Box>
  )
}
