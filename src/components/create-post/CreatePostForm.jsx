import { Box, Text, Textarea } from '@mantine/core'
import React from 'react'
import BorderBox from '../common/BorderBox'
import GenericButton from '../common/GenericButton'
import TextField from '../common/TextField'

export default function CreatePostForm() {
    return (
        <BorderBox>
            <TextField />
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
    )
}
