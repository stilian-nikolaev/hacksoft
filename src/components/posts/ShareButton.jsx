import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Box, Image, Text } from '@mantine/core'

import { useCreatePost } from '../../hooks/posts';
import { useEditProfile } from '../../hooks/profile';
import { AuthStore } from '../../stores/AuthStore';
import { endpoints } from '../../service/apiEndpoints';

export default function ShareButton({content, profileData}) {
    const { profileId } = AuthStore;
    const queryClient = useQueryClient();

    function handleShareClick() {
        mutation.mutate({
            content,
            creatorId: profileId,
            creator: {
                name: profileData.name,
                occupation: profileData.occupation,
                imageURL: profileData.imageURL,
            },
            likeCount: 0,
            likedBy: [],
            postedAt: Date.now(),
        })
    }

    const mutationFn = data => {
        const postRes = useCreatePost(data)
        const profileRes = useEditProfile(profileId, { posts: profileData.posts + 1 })

        return Promise.all([postRes, profileRes])
    }

    const mutation = useMutation({
        mutationFn,
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.posts.all().url)
        }
    })

  return (
      <Box onClick={handleShareClick} sx={{ display: 'flex', alignItems: 'center', '&:hover': { cursor: 'pointer' } }}>
          <Image
              src="/share-icon.svg"
              alt="like button icon"
              sx={{ width: 21 }}
          />
          <Text sx={{ fontSize: 15, color: '#65676B', fontWeight: 500, marginLeft: 7.5, }}>Share</Text>
      </Box>
  )
}
