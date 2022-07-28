import { Box } from '@mantine/core'
import React from 'react'
import StatsCard from './StatsCard'

export default function ProfileStats() {
  return (
    <Box sx={{ height: 60, display: 'flex', borderTop: '1px solid rgba(123, 124, 129, 0.2)' }}>
      <StatsCard amount={201} unit="Likes" sx={{ borderRight: '1px solid rgba(123, 124, 129, 0.2)' }} />
      <StatsCard amount={4} unit="Posts" />
    </Box>
  )
}
