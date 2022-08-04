import React from 'react'
import { Box, Text } from '@mantine/core'

export default function StatsCard({ amount, unit, sx }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', ...sx }}>
            <Box sx={{ textAlign: 'center' }}>
                <Text sx={{ fontSize: 16, fontWeight: 500 }}>{amount}</Text>
                <Text sx={{ fontSize: 14, color: '#65676B' }}>{unit}</Text>
            </Box>
        </Box>
    )
}
