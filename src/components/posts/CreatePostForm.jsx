import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import * as yup from 'yup'
import { Box } from '@mantine/core'

import BorderBox from '../common/BorderBox'
import GenericButton from '../common/GenericButton'
import GenericForm from '../common/GenericForm'
import TextAreaField from '../common/TextAreaField'
import { useCreatePost } from '../../hooks/posts'
import { useEditProfile } from '../../hooks/profile'
import { endpoints } from '../../service/apiEndpoints'
import { AuthStore } from '../../stores/AuthStore'

const validationSchema = yup
    .object({
        content: yup.string().trim().min(1).max(1000).required(),
    })

const initialValues = {
    content: ''
}

export default function CreatePostForm({ profilePosts }) {
    const queryClient = useQueryClient();
    const { profileId } = AuthStore;

    const mutationFn = data => {
        const postRes = useCreatePost(data)
        const profileRes = useEditProfile(profileId, { posts: profilePosts + 1 })

        return Promise.all([postRes, profileRes])
    }

    const mutation = useMutation({
        mutationFn,
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.posts.all().url)
        }
    })

    function handleSubmit(data, bag) {
        bag.setFieldValue('content', '')
        mutation.mutate({
            ...data,
            creatorId: profileId,
            likeCount: 0,
            likedBy: [],
            postedAt: Date.now(),
        })
    }

    return (
        <GenericForm validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
            <BorderBox>
                <TextAreaField
                    variant="unstyled"
                    placeholder="Share something to the community..."
                    aria-label="Post Content"
                    autosize
                    name="content"
                    size={16}
                    maxRows={10}
                    sx={{
                        fontSize: 16,
                        padding: '20px 28px 20px 28px',
                        '& ::placeholder': {
                            fontSize: 16,
                            color: '#212529 !important'
                        }
                    }}
                />
                <Box sx={{
                    display: 'flex',
                    height: 45,
                    justifyContent: 'right',
                    borderTop: '1px solid rgba(123, 124, 129, 0.2)',
                    padding: '7px 15px'
                }}>
                    <GenericButton type="submit">Post</GenericButton>
                </Box>
            </BorderBox>
        </GenericForm>
    )
}
