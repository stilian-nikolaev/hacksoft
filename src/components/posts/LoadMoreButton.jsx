import { Box } from '@mantine/core'
import React from 'react'
import GenericButton from '../common/GenericButton'

export default function LoadMoreButton() {
  return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <GenericButton sx={{
              marginTop: 19,
              width: 117,
              height: 32,
          }}>
              Load more
          </GenericButton>
      </Box>
  )
}
