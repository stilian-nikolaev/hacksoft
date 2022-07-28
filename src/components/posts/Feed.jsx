import { Box, Center, UnstyledButton } from '@mantine/core'
import React from 'react'
import BorderBox from '../common/BorderBox'
import CreatePostForm from '../create-post/CreatePostForm'
import LoadMoreButton from './LoadMoreButton'
import Post from './Post'

export default function Feed() {
    return (
        <Box sx={{  }}>
            <CreatePostForm />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <LoadMoreButton />
        </Box >
    )
}
