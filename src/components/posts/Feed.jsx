import { Box, Center, UnstyledButton, Text, Loader } from '@mantine/core'
import React, { useState } from 'react'
import { usePosts } from '../../hooks/posts'
import ErrorScreen from '../common/ErrorScreen'
import LoadingScreen from '../common/LoadingScreen'
import CreatePostForm from './CreatePostForm'
import LoadMoreButton from './LoadMoreButton'
import Post from './Post'

export default function Feed(profileData) {
    const { data, status } = usePosts();
    const [step, setStep] = useState(5);

    if (status === 'loading') return <LoadingScreen />

    if (status === 'error') return <ErrorScreen />

    const nextStep = () => setStep(prev => prev + 5)

    const posts = Object.keys(data).reverse();
    
    return (
        <Box sx={{ width: '100%' }}>
            <CreatePostForm profilePosts={profileData.posts} />
            {posts?.slice(0, step).map(x => <Post
                key={x}
                id={x}
                postedAt={data[x].postedAt}
                creatorId={data[x].creatorId}
                content={data[x].content}
                likeCount={data[x].likeCount}
                likedBy={data[x].likedBy}
                profileLikes={profileData.likes}
                profileData={profileData}
            />)}
            {step < posts.length && <LoadMoreButton nextStep={nextStep} />}
        </Box >
    )
}
