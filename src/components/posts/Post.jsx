import { Box, Image, Text } from '@mantine/core'
import React, { useState } from 'react'
import BorderBox from '../common/BorderBox'
import PostContent from './PostContent'
import PostHeader from './PostHeader'
import { endpoints } from '../../service/apiEndpoints'
import PostLikes from './PostLikes'
import { useEditPost } from '../../hooks/posts'
import { AuthStore } from '../../stores/AuthStore'
import { useEditProfile } from '../../hooks/profile'
import LikeButton from './LikeButton.'

export default function Post({ postedAt, content, creator, ...likesData}) {

    return (
        <BorderBox sx={{ marginTop: 19, }}>
            <Box sx={{ borderBottom: '1px solid rgba(123, 124, 129, 0.2)', padding: '15px 15px 10px 15px' }}>
                <PostHeader name={creator?.name} occupation={creator?.occupation} createdAt={postedAt} imageURL={creator?.imageURL} />
                <PostContent content={content} />
                <PostLikes likeCount={likesData.likeCount} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 17px' }}>
                <LikeButton {...likesData} />
                <Box sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
                    <Image
                        src="/share-icon.svg"
                        alt="like button icon"
                        sx={{ width: 21 }}
                    />
                    <Text sx={{ fontSize: 15, color: '#65676B', fontWeight: 500, marginLeft: 7.5, }}>Share</Text>
                </Box>
            </Box>
        </BorderBox>
    )
}
