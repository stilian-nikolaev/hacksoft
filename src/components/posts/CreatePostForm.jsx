import { Box, Text, Textarea } from '@mantine/core'
import React from 'react'
import BorderBox from '../common/BorderBox'
import GenericButton from '../common/GenericButton'
import GenericForm from '../common/GenericForm'
import TextAreaField from '../common/TextAreaField'
import * as yup from 'yup'
import { useCreatePost } from '../../hooks/posts'
import { useMutation, useQueryClient } from 'react-query'
import { endpoints } from '../../service/apiEndpoints'

const validationSchema = yup
    .object({
        content: yup.string().trim().min(1).max(200).required(),
    })

const initialValues = {
    content: ''
}

export default function CreatePostForm() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: data => useCreatePost(data),
        onSuccess: (res) => {
            queryClient.invalidateQueries(endpoints.posts.all().url)
                .then(() => console.log(res))
        }
    })

    function handleSubmit(data, bag) {
        console.log(bag);
        bag.setFieldValue('content','')
        mutation.mutate({ ...data, creator: 'Stilian Nikolaev', creatorOccupation: 'Co-Founder, HackSoft', likes: 17, postedAt: Date.now()})
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
