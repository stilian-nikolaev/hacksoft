import React from 'react'
import { Avatar, Box, Image, } from '@mantine/core'
import Header from './Header'
import BackGround from './BackGround'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <Box sx={{ minHeight: '100vh', position: 'relative'}}>
            <Header />
            <BackGround />
            <Box sx={{
                marginTop: 124,
                display: 'flex',
                justifyContent: 'center',
                paddingBottom:135
            }}>
                <Box sx={{
                    width: '58%',
                }}>
                    {children}
                </Box>
            </Box>
            {/* <Footer /> */}
        </Box>
    )
}
