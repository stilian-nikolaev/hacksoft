import { Box, Image, Text } from '@mantine/core'
import React, { useState } from 'react'
import BorderBox from '../common/BorderBox'
import PostContent from './PostContent'
import PostHeader from './PostHeader'
import PostLikes from './PostLikes'
import LikeButton from './LikeButton.'
import ShareButton from './ShareButton'

export default function Post({ postedAt, content, creator, profileData, ...likesData}) {

    return (
        <BorderBox sx={{ marginTop: 19, }}>
            <Box sx={{ borderBottom: '1px solid rgba(123, 124, 129, 0.2)', padding: '15px 15px 10px 15px' }}>
                <PostHeader name={creator?.name} occupation={creator?.occupation} createdAt={postedAt} imageURL={creator?.imageURL} />
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
