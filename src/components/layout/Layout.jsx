import React from 'react'
import { Avatar, Box, Image, } from '@mantine/core'
import Header from './Header'
import BackGround from './BackGround'

export default function Layout({ children }) {
    return (
        <Box>
            <Header />
            <BackGround />
            <Box sx={{
                marginTop: 124,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: '58%',
                }}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}
