import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import * as yup from 'yup'
import { Box, Text } from '@mantine/core'

import { useRegisterUser } from '../../hooks/auth'
import { useCreateProfile } from '../../hooks/profile'
import TextField from '../common/TextField'
import GenericButton from '../common/GenericButton'
import GenericForm from '../common/GenericForm'
import { AuthStore } from '../../stores/AuthStore'
import { routerEndpoints } from '../../service/routerEndpoints'

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().trim().min(1).max(40).required(),
    occupation: yup.string().trim().min(1).max(40).required(),
    password: yup.string().trim().min(6).max(40).required(),
    imageURL: yup.string().trim().min(6).max(800).required(),
  })

const initialValues = {
  email: '',
  password: '',
  name: '',
  occupation: '',
  imageURL: ''
}

export default function RegisterPage() {
  const { login, setprofileId } = AuthStore
  const navigate = useNavigate();

  const mutationFn = async data => {
    const authRes = await useRegisterUser({ email: data.email, password: data.password });
    const profileRes = await useCreateProfile(authRes.localId, {
      name: data.name,
      occupation: data.occupation,
      likes: 0,
      posts: 0,
      imageURL: data.imageURL
    });
    return { ...authRes, profile: profileRes }
  }

  const mutation = useMutation({
    mutationFn,
    onSuccess: (res) => {
      login(res.idToken, res.expiresIn)
      setprofileId(res.localId);
      navigate(routerEndpoints.home);
    }
  })

  function handleSubmit(data) {
    mutation.mutate(data)
  }

  function handleLogInClick() {
    navigate(routerEndpoints.login);
  }


  return (
    <GenericForm validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', justifyContent: 'center', }}>
        <Box sx={{ width: '50%' }}>
          <Text sx={{ fontSize: '22px', textAlign: 'center' }}>Register to Hacksoft Feed</Text>
          <TextField
            placeholder="Email*"
            label="Email"
            name="email"
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
            placeholder="Password*"
            label="Password"
            name="password"
            type="password"
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
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
            <GenericButton type="submit" sx={{ width: 'auto' }}>
              Sign up
            </GenericButton>
            <Text sx={{ marginLeft: 20 }}>
              Already have an account?
              <Text
                onClick={handleLogInClick}
                sx={{
                  backgroundImage: `linear-gradient(black, black)`,
                  width: '100px',
                  backgroundSize: '0% 2px',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-size 0.2s',
                  backgroundPosition: '50% calc(100%)',
                  '&:hover': {
                    backgroundSize: '100% 2px',
                    cursor: 'pointer'
                  }
                }}>
                Log in here
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </GenericForm>
  )
}
