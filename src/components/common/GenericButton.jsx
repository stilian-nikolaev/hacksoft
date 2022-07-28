import { UnstyledButton } from '@mantine/core'
import React from 'react'

export default function GenericButton({ sx, children, onClick, ...props}) {
    return (
        <UnstyledButton
            {...props}
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '2px 25px',
                gap: 10,
                //should width be auto?
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
