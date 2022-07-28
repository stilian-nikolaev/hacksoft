import { Box, Center, Text } from '@mantine/core'
import React from 'react'

export default function StatsCard({amount, unit, sx}) {
  return (
      <Center sx={{ width: '50%', ...sx}}>
          <Box sx={{ textAlign: 'center' }}>
              <Text sx={{ fontSize: 16, fontWeight: 500 }}>{amount}</Text>
              <Text sx={{ fontSize: 14, color: '#65676B' }}>{unit}</Text>
          </Box>
      </Center>
  )
}
