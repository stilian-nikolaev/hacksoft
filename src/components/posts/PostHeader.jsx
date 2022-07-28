import { Avatar, Box, Text } from '@mantine/core'
import React from 'react'

export default function PostHeader() {
    return (
        <Box sx={{
            '@media (min-width: 551px)': {
                display: 'flex',
                justifyContent: 'space-between'
            },
        }}>
            <Box sx={{ display: 'flex', marginRight: 10 }}>
                <Avatar src="/avatar.jpg" size={48} radius="50%" alt="Avatar" />
                <Box sx={{ marginLeft: 10, alignSelf: 'center' }}>
                    <Text sx={{ fontSize: 16, fontWeight: 500 }}>Ivailo Buchvarov</Text>
                    <Text sx={{ fontSize: 14, color: '#65676B' }}>Co-Founder, HackSoft</Text>
                </Box>
            </Box>
            <Text sx={{
                fontSize: 12,
                color: '#65676B',
                '@media (max-width: 550px)': {
                    marginTop: 10
                },
            }}>
                20 minutes ago
            </Text>
        </Box>
    )
}
