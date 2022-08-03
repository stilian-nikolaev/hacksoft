import React from 'react'
import { observer } from 'mobx-react';
import { Box } from '@mantine/core'

import { AuthStore } from '../../stores/AuthStore'
import Feed from '../posts/Feed'
import ProfileCard from '../profile/ProfileCard'
import { useProfile } from '../../hooks/profile'
import LoadingScreen from '../common/LoadingScreen'
import ErrorScreen from '../common/ErrorScreen'

export default observer(function HomePage() {
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
            <ProfileCard {...data} />
            <Feed {...data} />
        </Box>
    )
})
