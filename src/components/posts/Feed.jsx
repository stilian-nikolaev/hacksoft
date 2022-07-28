import { Box, Center, UnstyledButton, Text } from '@mantine/core'
import React from 'react'
import { usePosts } from '../../hooks/posts'
import CreatePostForm from '../create-post/CreatePostForm'
import LoadMoreButton from './LoadMoreButton'
import Post from './Post'

export default function Feed() {
    const { data, status } = usePosts();
    if (status === 'loading') return <Text>Loading...</Text>

    if (status === 'error') return <Text>Error...</Text>

    return (
        <Box sx={{width: '100%'}}>
            <CreatePostForm />
            {Object.keys(data).map(x => <Post
                key={x}
                creator={data[x].creator}
                occupation={data[x].creatorOccupation}
                postedAt={data[x].postedAt}
                content={data[x].content}
                likes={data[x].likes}
            />)}
            <LoadMoreButton />
        </Box >
    )
}
