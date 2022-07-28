import { Box } from '@mantine/core'
import React from 'react'
import BorderBox from '../common/BorderBox'
import CreatePostForm from '../create-post/CreatePostForm'
import Post from './Post'

export default function Feed() {
    return (
        <Box sx={{ width: '100%' }}>
            <CreatePostForm />
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    )
}
