import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Box, Image, Text } from '@mantine/core'

import { AuthStore } from '../../stores/AuthStore';
import { useEditPost } from '../../hooks/posts';
import { useEditProfile } from '../../hooks/profile';
import { endpoints } from '../../service/apiEndpoints';

export default function LikeButton({ id, likedBy = [], likeCount, profileLikes }) {
    const { profileId } = AuthStore;
    const queryClient = useQueryClient();
    const [liked, setLiked] = useState(likedBy.includes(profileId));

    const mutationFn = data => {
        const postRes = useEditPost(id, data)
        const profileRes = useEditProfile(profileId, { likes: liked ? profileLikes - 1 : profileLikes + 1 })

        return Promise.all([postRes, profileRes])
    }

    const mutation = useMutation({
        mutationFn,
        onSuccess: () => {
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
        <Box onClick={handleLikeClick} sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
            <Image
                src="/like-button-icon.svg"
                alt="like button icon"
                sx={{ width: 20 }}
            />
            <Text sx={{ fontFamily: 'Barlow', fontSize: 15, color: '#65676B', fontWeight: 500, marginLeft: 9, }}>Like{liked && 'd'}</Text>
        </Box>
    )
}
