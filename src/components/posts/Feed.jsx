import { Box, Center, UnstyledButton, Text, Loader } from '@mantine/core'
import React from 'react'
import { usePosts } from '../../hooks/posts'
import ErrorScreen from '../common/ErrorScreen'
import LoadingScreen from '../common/LoadingScreen'
import CreatePostForm from './CreatePostForm'
import LoadMoreButton from './LoadMoreButton'
import Post from './Post'

export default function Feed(profileData) {
    const { data, status } = usePosts();
    
    if (status === 'loading') return <LoadingScreen />

    if (status === 'error') return <ErrorScreen/>
    const posts = Object.keys(data).reverse();

    return (
        <Box sx={{ width: '100%' }}>
            <CreatePostForm {...profileData} />
            {posts?.map(x => <Post
                key={x}
                id={x}
                postedAt={data[x].postedAt}
                creator={data[x].creator}
                content={data[x].content}
                likeCount={data[x].likeCount}
                likedBy={data[x].likedBy}
                profileLikes={profileData.likes}
                profileData={profileData}
            />)}
            <LoadMoreButton />
        </Box >
    )
}
