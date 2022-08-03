import React from 'react'
import { Box } from '@mantine/core'

export default function BorderBox({ children, sx }) {
    return (
        <Box sx={{ background: 'white', border: '1px solid rgba(123, 124, 129, 0.2)', borderRadius: '6px', ...sx }}>
            {children}
        </Box>
    )
}
