import { Avatar, Box, Image } from '@mantine/core'
import React from 'react'

export default function Header() {
  return (
      <Box sx={{
          position: 'fixed',
          top: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 70,
          width: '100%',
          paddingLeft: 50,
          paddingRight: 50,
          boxShadow: '0px 4px 5px rgba(123, 124, 129, 0.05)',
          backgroundColor: 'white'
      }}>
          <Image
              src="/logo.svg"
              alt="Hacksoft Logo"
          />
          <Avatar src="/avatar.jpg" size={36} radius="50%" alt="Avatar" />
      </Box>
  )
}
