import { Box, Image, Text } from '@mantine/core'
import React from 'react'

export default function PostLikes({likes}) {
  return (
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
          <Image
              src="/like-orange.svg"
              alt="like icon"
              sx={{ width: 18 }}
          />
          <Text sx={{ color: '#65676B', fontSize: 13, marginLeft: 6, }}>{likes}</Text>
      </Box>
  )
}
