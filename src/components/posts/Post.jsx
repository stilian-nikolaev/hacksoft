import React from 'react'
import { Box, Text } from '@mantine/core'

import PostContent from './PostContent'
import PostHeader from './PostHeader'
import PostLikes from './PostLikes'
import LikeButton from './LikeButton.'
import ShareButton from './ShareButton'
import BorderBox from '../common/BorderBox'
import LoadingScreen from '../common/LoadingScreen'
import { useProfile } from '../../hooks/profile'

export default function Post({ postedAt, content, creatorId, profileData, ...likesData }) {
    const { data, status } = useProfile(creatorId);

    if (status === 'loading') return <LoadingScreen />

    if (status === 'error') return <Text>Error has occured</Text>

    return (
        <BorderBox sx={{ marginTop: 19, }}>
            <Box sx={{ borderBottom: '1px solid rgba(123, 124, 129, 0.2)', padding: '15px 15px 10px 15px' }}>
                <PostHeader creatorId={creatorId} createdAt={postedAt} {...data} />
                <PostContent content={content} />
                <PostLikes likeCount={likesData.likeCount} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 17px' }}>
                <LikeButton {...likesData} />
                <ShareButton content={content} profileData={profileData} />
            </Box>
        </BorderBox>
    )
}
