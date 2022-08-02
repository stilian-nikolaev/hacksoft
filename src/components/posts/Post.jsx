import { Box, Image, Text } from '@mantine/core'
import React, { useState } from 'react'
import BorderBox from '../common/BorderBox'
import PostContent from './PostContent'
import PostHeader from './PostHeader'
import { useMutation, useQueryClient } from 'react-query'
import { endpoints } from '../../service/apiEndpoints'
import PostLikes from './PostLikes'
import { useEditPost } from '../../hooks/posts'
import { AuthStore } from '../../stores/AuthStore'
import { useEditProfile } from '../../hooks/profile'

export default function Post({ id, postedAt, content, likeCount, creator, likedBy = [], profileLikes }) {
    const queryClient = useQueryClient();
    const { profileId } = AuthStore;
    const [liked, setLiked] = useState(likedBy.includes(profileId));

    const mutationFn = data => {
        const postRes = useEditPost(id, data)
        const profileRes = useEditProfile(profileId, { likes: liked ? profileLikes - 1 : profileLikes + 1 })

        return Promise.all([postRes, profileRes])
    }

    const mutation = useMutation({
        mutationFn,
        onSuccess: (res) => {
            queryClient.invalidateQueries(endpoints.posts.all().url)
                .then(() => setLiked(!liked))
        }
    })

    function handleLikeClick() {
        const dislikeData = { likeCount: likeCount - 1, likedBy: likedBy.filter(x => x != profileId) };
        const likeData = { likeCount: likeCount + 1, likedBy: [profileId, ...likedBy] }

        liked ? mutation.mutate(dislikeData) : mutation.mutate(likeData);
    }

    return (
        <BorderBox sx={{ marginTop: 19, }}>
            <Box sx={{ borderBottom: '1px solid rgba(123, 124, 129, 0.2)', padding: '15px 15px 10px 15px' }}>
                <PostHeader name={creator?.name} occupation={creator?.occupation} createdAt={postedAt} imageURL={creator?.imageURL} />
                <PostContent content={content} />
                <PostLikes likeCount={likeCount} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 17px' }}>
                <Box onClick={handleLikeClick} sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
                    <Image
                        src="/like-button-icon.svg"
                        alt="like button icon"
                        sx={{ width: 20 }}
                    />
                    <Text sx={{ fontFamily: 'Barlow', fontSize: 15, color: '#65676B', fontWeight: 500, marginLeft: 9, }}>Like{liked && 'd'}</Text>
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
