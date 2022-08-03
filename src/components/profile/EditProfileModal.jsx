import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { observer } from 'mobx-react'
import * as yup from 'yup'

import { Box, Modal, Text } from '@mantine/core'
import { ModalStore } from '../../stores/ModalStore'
import GenericForm from '../common/GenericForm'
import TextField from '../common/TextField'
import GenericButton from '../common/GenericButton'
import { AuthStore } from '../../stores/AuthStore'
import { endpoints } from '../../service/apiEndpoints'
import { useEditProfile } from '../../hooks/profile'

const validationSchema = yup
    .object({
        name: yup.string().trim().min(1).max(40).required(),
        occupation: yup.string().trim().min(1).max(40).required(),
        imageURL: yup.string().trim().min(6).max(800).required(),
    })


export default observer(function EditProfileModal(initialValues) {
    const { open, closeModal } = ModalStore;
    const queryClient = useQueryClient();
    const { profileId } = AuthStore;

    const mutation = useMutation({
        mutationFn: data => useEditProfile(profileId, data),
        onSuccess: () => {
            queryClient.invalidateQueries(endpoints.profiles.one(profileId).url)
                .then(closeModal)
        }
    })

    function handleSubmit(data) {
        mutation.mutate(data)
    }

    return (
        <Modal opened={open} onClose={closeModal} withCloseButton={false} centered radius={20}>
            <GenericForm validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                <Text sx={{ fontSize: '22px', textAlign: 'center' }}>Edit Profile</Text>
                <TextField
                    placeholder="Name*"
                    label="Name"
                    name="name"
                    size="lg"
                    required
                    sx={{
                        marginTop: '20px',
                        '& ::placeholder': {
                            color: `gray !important`

                        }
                    }}
                />
                <TextField
                    placeholder="Occupation*"
                    label="Occupation"
                    name="occupation"
                    size="lg"
                    required
                    sx={{
                        marginTop: '20px',
                        '& ::placeholder': {
                            color: `gray !important`

                        }
                    }}
                />
                <TextField
                    placeholder="Image URL*"
                    label="Image URL"
                    name="imageURL"
                    size="lg"
                    required
                    sx={{
                        marginTop: '20px',
                        '& ::placeholder': {
                            color: `gray !important`

                        }
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <GenericButton type="submit" sx={{ width: 'auto' }}>
                        Save
                    </GenericButton>
                </Box>
            </GenericForm>
        </Modal>
    )
})
