import { Avatar, Image, Text, UnstyledButton, Box, Center, MediaQuery } from '@mantine/core'
import React from 'react'
import { AuthStore } from '../stores/AuthStore'
import Layout from './layout/Layout'
import LoginForm from './login/LoginForm'
import Feed from './posts/Feed'
import ProfileCard from './profile/ProfileCard'
import { observer } from 'mobx-react';

export default observer(function Home() {
    return (
            <Box sx={{
                '@media (min-width: 1000px)': {
                    display: 'flex'
                }
            }}>
                <ProfileCard />
                <Feed />
            </Box>
    )
})
