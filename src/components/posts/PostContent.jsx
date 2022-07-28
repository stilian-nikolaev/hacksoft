import { Box, Text } from '@mantine/core'
import React from 'react'

export default function PostContent() {
  return (
    <Box sx={{marginTop: 10}}>
          <Text sx={{ color: '#212529', fontSize: 16}}>
              Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.
          </Text>
    </Box>
  )
}
