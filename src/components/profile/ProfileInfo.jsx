import { Avatar, Box, Image, Text } from '@mantine/core'
import React from 'react'
import { ModalStore } from '../../stores/ModalStore';
import EditProfileModal from './EditProfileModal'

export default function ProfileInfo({name, occupation, imageURL}) {
    const { openModal  } = ModalStore;

    function handleEditProfileClick() {
        openModal();
    }

    return (
        <Box sx={{ height: 70, display: 'flex', justifyContent: 'space-between', padding: '5px 5px 10px 10px' }}>
            <Box sx={{ display: 'flex' }}>
            <Avatar src={imageURL} sx={{ alignSelf: 'flex-end' }} size={50} radius="50%" alt="Avatar" />
            <Box sx={{ marginLeft: 10, alignSelf: 'center' }}>
                <Text sx={{ fontSize: 16, fontWeight: 500 }}>{name}</Text>
                <Text sx={{ fontSize: 13, color: '#65676B' }}>{occupation}</Text>
            </Box>
            </Box>
            <Box onClick={handleEditProfileClick} sx={{ display: 'flex', '&:hover': {cursor: 'pointer'} }} >
                <Image sx={{  width: 13 }} src="/edit-icon.svg" alt="edit-icon" />
            </Box>
            <EditProfileModal name={name} occupation={occupation} imageURL={imageURL}/>
        </Box>
    )
}
