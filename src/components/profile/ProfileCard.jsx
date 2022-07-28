import React from 'react'
import BorderBox from '../common/BorderBox'
import ProfileInfo from './ProfileInfo'
import ProfileStats from './ProfileStats'

export default function ProfileCard() {
    return (
        <BorderBox sx={{
            minWidth: 220,
            height: 130,
            marginRight: 20
        }}>
            <ProfileInfo />
            <ProfileStats />
        </BorderBox>
    )
}
