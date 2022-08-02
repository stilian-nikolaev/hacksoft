import { Avatar, Image, Text, UnstyledButton, Box, Center, MediaQuery } from '@mantine/core'
import React from 'react'
import { AuthStore } from '../stores/AuthStore'
import Layout from './layout/Layout'
import LoginForm from './login/LoginForm'
import Feed from './posts/Feed'
import ProfileCard from './profile/ProfileCard'
import { observer } from 'mobx-react';
import { useProfile } from '../hooks/profile'
import LoadingScreen from './common/LoadingScreen'
import ErrorScreen from './common/ErrorScreen'

export default observer(function Home() {
    const { profileId } = AuthStore;
    const { data, status } = useProfile(profileId);

    if (status === 'loading') return <LoadingScreen />

    if (status === 'error') return <ErrorScreen />
    return (
        <Box sx={{
            '@media (min-width: 1000px)': {
                display: 'flex'
            }
        }}>
            <ProfileCard {...data}/>
            <Feed {...data} />
        </Box>
    )
})
