import { Textarea } from '@mantine/core'
import React from 'react'

export default function TextAreaField() {
    return (
        <Textarea
            variant="unstyled"
            placeholder="Share something to the community..."
            aria-label="Post Content"
            autosize
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

    )
}
