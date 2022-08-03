import React from 'react'
import { observer } from 'mobx-react';

import BorderBox from '../common/BorderBox'
import ProfileInfo from './ProfileInfo'
import ProfileStats from './ProfileStats'

export default observer(function ProfileCard({ name, occupation, imageURL, likes, posts }) {

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
            <ProfileInfo name={name} occupation={occupation} imageURL={imageURL} />
            <ProfileStats likes={likes} posts={posts} />
        </BorderBox>
    )
})
