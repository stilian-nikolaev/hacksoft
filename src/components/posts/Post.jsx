import { Box, Image, Text } from '@mantine/core'
import React from 'react'
import BorderBox from '../common/BorderBox'
import PostContent from './PostContent'
import PostHeader from './PostHeader'
import PostLikes from './PostLikes'

export default function Post({creator, occupation, postedAt, content, likes}) {
    return (
        <BorderBox sx={{ marginTop: 19,}}>
            <Box sx={{ borderBottom: '1px solid rgba(123, 124, 129, 0.2)', padding: '15px 15px 10px 15px' }}>
                <PostHeader name={creator} occupation={occupation} createdAt={postedAt} />
                <PostContent content={content}/>
                <PostLikes likes={likes}/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 17px' }}>
                <Box sx={{display:'flex', alignItems: 'center'}}>
                    <Image
                        src="/like-button-icon.svg"
                        alt="like button icon"
                        sx={{ width: 20 }}
                    />
                    <Text sx={{ fontFamily: 'Barlow', fontSize: 15, color: '#65676B', fontWeight: 500, marginLeft: 9,}}>Like</Text>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
