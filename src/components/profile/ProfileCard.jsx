import { observer } from 'mobx-react';
import React from 'react'
import { useProfile } from '../../hooks/profile';
import { ProfileStore } from '../../stores/ProfileStore';
import BorderBox from '../common/BorderBox'
import ErrorScreen from '../common/ErrorScreen';
import LoadingScreen from '../common/LoadingScreen';
import ProfileInfo from './ProfileInfo'
import ProfileStats from './ProfileStats'

export default observer(function ProfileCard() {
    const { profileId } = ProfileStore;
    const { data, status } = useProfile(profileId);

    if (status === 'loading') return <LoadingScreen />

    if (status === 'error') return <ErrorScreen />

    return (
        <BorderBox sx={{
            minWidth: 220,
            '@media (max-width: 1000px)': {
                width: '100%'
            },
            height: 130,
            marginRight: 20,
            marginBottom: 20,
        }}>
            <ProfileInfo />
            <ProfileStats />
        </BorderBox>
    )
})
