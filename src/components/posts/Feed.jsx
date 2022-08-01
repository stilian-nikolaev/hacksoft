import { Box, Center, UnstyledButton, Text, Loader } from '@mantine/core'
import React from 'react'
import { usePosts } from '../../hooks/posts'
import ErrorScreen from '../common/ErrorScreen'
import LoadingScreen from '../common/LoadingScreen'
import CreatePostForm from './CreatePostForm'
import LoadMoreButton from './LoadMoreButton'
import Post from './Post'

export default function Feed() {
    const { data, status } = usePosts();

    if (status === 'loading') return <LoadingScreen />

    if (status === 'error') return <ErrorScreen/>

    return (
        <Box sx={{ width: '100%' }}>
            <CreatePostForm />
            {Object.keys(data).reverse().map(x => <Post
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
