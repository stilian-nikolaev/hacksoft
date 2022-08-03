import React from 'react'
import { Box } from '@mantine/core'

import Header from './Header'
import BackGround from './BackGround'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <Box sx={{}}>
            <Header />
            <BackGround />
            <Box sx={{
                marginTop: 124,
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: 60,
                minHeight: '73vh'
            }}>
                <Box sx={{
                    width: '58%',
                }}>
                    {children}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
