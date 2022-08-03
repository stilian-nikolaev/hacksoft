import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Avatar, Menu } from '@mantine/core';

import { useProfileImageURL } from '../../hooks/profile';
import { routerEndpoints } from '../../service/routerEndpoints';
import { AuthStore } from '../../stores/AuthStore';
import LoadingScreen from '../common/LoadingScreen';
import ErrorScreen from '../common/ErrorScreen';

export default function ProfileAvatar() {
  const { logout, profileId } = AuthStore;
  const { data, status } = useProfileImageURL(profileId);
  const navigate = useNavigate()

  if (status === 'loading') return <LoadingScreen />;
  if (status === 'error') return <ErrorScreen />;

  function handleLogoutClick() {
    logout();
    navigate(routerEndpoints.login)
  }

  return (
    <Menu>
      <Menu.Target>
        <Avatar src={data} size={36} sx={{ '&:hover': { cursor: 'pointer' } }} radius="50%" alt="Avatar" />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={handleLogoutClick}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
