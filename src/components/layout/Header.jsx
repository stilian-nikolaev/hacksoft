import { Avatar, Box, Image, Menu } from '@mantine/core'
import React from 'react'
import { AuthStore } from '../../stores/AuthStore'
import { useNavigate } from 'react-router-dom'
import { routerEndpoints } from '../../service/routerEndpoints';
import { useProfileImageURL } from '../../hooks/profile';
import { observer } from 'mobx-react';
import ProfileAvatar from './ProfileAvatar';

export default observer(function Header() {
    const { isAuthenticated} = AuthStore;
    const navigate = useNavigate()

    function handleLogoClick() {
        navigate(routerEndpoints.home)
    }

    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 70,
            width: '100%',
            boxShadow: '0px 4px 5px rgba(123, 124, 129, 0.05)',
            backgroundColor: 'white',
            zIndex: 999,
            padding: '0 50px',
            '@media (max-width: 400px)': {
                padding: '0 30px'
            }

        }}>
            <Image
                src="/logo.svg"
                alt="Hacksoft Logo"
                sx={{ '&:hover': { cursor: 'pointer' } }}
                onClick={handleLogoClick}
            />
            {isAuthenticated && <ProfileAvatar />}
        </Box>
    )
})
