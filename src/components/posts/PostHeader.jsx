import { Avatar, Box, Text } from '@mantine/core'
import React from 'react'
import PostTime from './PostTime'

export default function PostHeader({ name, occupation, createdAt, imageURL, creatorId }) {
    
    console.log(creatorId);

    return (
        <Box sx={{
            '@media (min-width: 551px)': {
                display: 'flex',
                justifyContent: 'space-between'
            },
        }}>
            <Box sx={{ display: 'flex', marginRight: 10 }}>
                <Avatar src={imageURL} size={48} radius="50%" alt="Avatar" />
                <Box sx={{ marginLeft: 10, alignSelf: 'center' }}>
                    <Text sx={{ fontSize: 16, fontWeight: 500 }}>{name}</Text>
                    <Text sx={{ fontSize: 14, color: '#65676B' }}>{occupation}</Text>
                </Box>
            </Box>
            <PostTime createdAt={createdAt} />
        </Box>
    )
}
