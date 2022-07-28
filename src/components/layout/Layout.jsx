import React from 'react'
import { Avatar, Box, Image, } from '@mantine/core'
import Header from './Header'

export default function Layout({ children }) {
    return (<>
        <Header/>
        <Image src="/orange-triangle.svg" sx={{ width: '56vw', position: 'fixed', zIndex: -1, top: 67, right: 0 }} />
        <Image src="/gray-square.svg" sx={{ width: '53vw', position: 'fixed', zIndex: -1, bottom: 0 }} />
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
    </>

    )
}
