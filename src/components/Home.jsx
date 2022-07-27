import { Avatar, Header, Image, Text } from '@mantine/core'
import React from 'react'

export default function Home() {
    return (
        <Header sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 70,
            paddingLeft: 50,
            paddingRight: 50,
        }}>
            <Image
                src="/logo.png"
                alt="Hacksoft Logo"
            />
            <Avatar src="/avatar.jpg" size={36} radius="50%" alt="Avatar" />
        </Header>
    )
}
