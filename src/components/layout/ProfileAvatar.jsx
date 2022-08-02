import { Avatar, Menu } from '@mantine/core';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useProfileImageURL } from '../../hooks/profile';
import { routerEndpoints } from '../../service/routerEndpoints';
import { AuthStore } from '../../stores/AuthStore';

export default function ProfileAvatar() {
  const { logout, profileId } = AuthStore;
  const navigate = useNavigate()
  const { data, status } = useProfileImageURL(profileId);

  if (status === 'loading') return;
  if (status === 'error') return;

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
