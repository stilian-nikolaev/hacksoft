import { Avatar, Image, Text, UnstyledButton, Box, Center, MediaQuery } from '@mantine/core'
import React from 'react'
import CreatePostForm from './create-post/CreatePostForm'
import Layout from './layout/Layout'
import Feed from './posts/Feed'
import ProfileCard from './profile/ProfileCard'

export default function Home() {
    return (
        <Layout>

            <Box sx={{
                '@media (min-width: 1000px)': {
                    display: 'flex'
                }
            }}>
                <ProfileCard />
                <Feed />
            </Box>

        </Layout >
    )
}
