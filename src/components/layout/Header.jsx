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
            boxShadow: '0px 4px 5px rgba(123, 124, 129, 0.05)',
            backgroundColor: 'white',
            zIndex: 999,
            padding: '0 50px',
            '@media (max-width: 400px)': {
                padding: '0 30px'
            }
            
        }}>
            <Image
                src="/logo.svg"
                alt="Hacksoft Logo"
            />
            <Avatar src="/avatar.jpg" size={36} radius="50%" alt="Avatar" />
        </Box>
    )
}
