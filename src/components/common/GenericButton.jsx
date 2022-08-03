import React from 'react'
import { UnstyledButton } from '@mantine/core'

export default function GenericButton({ sx, children, onClick, ...props }) {
    return (
        <UnstyledButton
            {...props}
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
