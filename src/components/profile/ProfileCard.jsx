import React from 'react'
import BorderBox from '../common/BorderBox'
import ProfileInfo from './ProfileInfo'
import ProfileStats from './ProfileStats'

export default function ProfileCard() {
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
}
