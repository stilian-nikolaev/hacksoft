import { UnstyledButton } from '@mantine/core'
import React from 'react'

export default function SubmitButton({ sx, children, onClick }) {
    return (
        <UnstyledButton
            onClick={onClick}
            type="submit"
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '2px 25px',
                gap: 10,
                width: 79,
                height: 32,
                background: '#FD7500',
                borderRadius: 4,
                fontSize: 14,
                color: 'white',
                ...sx
            }}>
            {children}
        </UnstyledButton>
    )
}
