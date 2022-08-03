import React from 'react'
import { Global } from '@mantine/core'

export default function GlobalStyles() {
    return (
        <Global
            styles={{
                body: {
                    backgroundColor: '#F6F7F9',
                },
            }}
        />
    )
}
