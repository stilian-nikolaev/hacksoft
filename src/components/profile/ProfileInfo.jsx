import { Avatar, Box, Image, Text } from '@mantine/core'
import React from 'react'

export default function ProfileInfo({name, occupation, imageURL}) {
    return (
        <Box sx={{ height: 70, display: 'flex', padding: '5px 5px 10px 10px' }}>
            <Avatar src={imageURL} sx={{ alignSelf: 'flex-end' }} size={50} radius="50%" alt="Avatar" />
            <Box sx={{ marginLeft: 10, alignSelf: 'center' }}>
                <Text sx={{ fontSize: 16, fontWeight: 500 }}>{name}</Text>
                <Text sx={{ fontSize: 13, color: '#65676B' }}>{occupation}</Text>
            </Box>
            <Box sx={{ display: 'flex' }} >
                <Image sx={{ position: 'absolute', width: 13 }} src="/edit-icon.svg" alt="edit-icon" />
            </Box>
        </Box>
    )
}
