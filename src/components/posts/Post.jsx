import { Box, Image, Text } from '@mantine/core'
import React, { useState } from 'react'
import BorderBox from '../common/BorderBox'
import PostContent from './PostContent'
import PostHeader from './PostHeader'
import { useMutation, useQueryClient } from 'react-query'
import { endpoints } from '../../service/apiEndpoints'
import PostLikes from './PostLikes'
import { useEditPost } from '../../hooks/posts'

export default function Post({ id, postedAt, content, likes, creator}) {
    const queryClient = useQueryClient();

    const [liked, setLiked] = useState(false);

    const mutation = useMutation({
        mutationFn: (data) => useEditPost(id, data),
        onSuccess: (res) => {
            queryClient.invalidateQueries(endpoints.posts.all().url)
                .then(() => setLiked(!liked))
        }
    })

    function handleLikeClick() {
        mutation.mutate({likes:  liked ? likes - 1 : likes + 1})
    }

    return (
        <BorderBox sx={{ marginTop: 19,}}>
            <Box sx={{ borderBottom: '1px solid rgba(123, 124, 129, 0.2)', padding: '15px 15px 10px 15px' }}>
                <PostHeader name={creator?.name} occupation={creator?.occupation} createdAt={postedAt} imageURL={creator?.imageURL}/>
                <PostContent content={content}/>
                <PostLikes likes={likes}/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 17px' }}>
                <Box onClick={handleLikeClick} sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
                    <Image
                        src="/like-button-icon.svg"
                        alt="like button icon"
                        sx={{ width: 20 }}
                    />
                    <Text sx={{ fontFamily: 'Barlow', fontSize: 15, color: '#65676B', fontWeight: 500, marginLeft: 9,}}>Like{liked && 'd'}</Text>
                </Box>
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
